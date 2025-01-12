import { Button, ButtonVariant } from "@/components/common/Button";
import { attestOnChain } from "@/utils/connectToEAS";
import Dialog from "@mui/material/Dialog";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Transaction } from "@ethereum-attestation-service/eas-sdk";
import { fetchFarcasterDataFromUsername } from "@/utils/fetchFarcasterDatafromUsername";

const formLabelClass = "title-small mb-6";
const formParagraphClass = "my-2";
const formSection = "my-6";

type Inputs = {
  collaborators: string;
  contributonData: string;
};

type CollaboratorAddressState = {
  address: string;
  isFailure: boolean;
};

interface Props {
  setAttestationUid: Dispatch<SetStateAction<string>>;
  setTransactionData: Dispatch<SetStateAction<Transaction<string> | null>>;
}

export const AttestationDialog: React.FC<Props> = ({
  setAttestationUid,
  setTransactionData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    getValues,
  } = useForm<Inputs>();
  const [open, setOpen] = useState(false);
  const [collaboratorAddress, setCollaboratorAddress] =
    useState<CollaboratorAddressState>({
      address: "",
      isFailure: false,
    });
  const [isFormValid, setIsFormValid] = useState({
    collaborators: false,
    contributionData: false,
  });
  const { address, isConnected } = useAccount();

  const getCollaboratorAddress = async (username: string) => {
    try {
      const data = await fetchFarcasterDataFromUsername(username);
      const usernameAddress = data.transfer.owner;
      setCollaboratorAddress({
        address: usernameAddress,
        isFailure: false,
      });
    } catch (error) {
      console.error(error);
      setCollaboratorAddress({
        address: "",
        isFailure: true,
      });
      setIsFormValid((prevState) => ({
        ...prevState,
        ["collaborators"]: false,
      }));
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (collaboratorAddress) {
      const res = await attestOnChain(
        collaboratorAddress.address,
        data.contributonData
      );

      if (res) {
        setAttestationUid(res.newAttestationUID);
        setTransactionData(res.transaction);
      }
      reset();
      handleClose();
    }
  };

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Make attestation</Button>
      <Dialog open={open} onClose={handleClose}>
        <form className="body-medium p-12" onSubmit={handleSubmit(onSubmit)}>
          <aside className="body-small">ADD CONTRIBUTION</aside>
          <div className={formSection}>
            <label className={formLabelClass}>Project</label>
            <p className={formParagraphClass}>Open to the Public</p>
          </div>
          <div className={formSection}>
            <label className="title-small">Collaborators</label>
            <p className={formParagraphClass}>
              Tag a collaborator, using their Farcaster username.
            </p>
            <input
              {...register("collaborators", {
                required: "This field is required.",
                pattern: {
                  value: /^@[a-z0-9][a-z0-9-]{0,15}$/,
                  message: "Farcaster username is not valid",
                },
                maxLength: 16,
              })}
              className="w-full pl-6 py-2 border"
              placeholder="@farcasterusername"
              onBlur={async () => {
                const isCollaboratorsValid = await trigger("collaborators");
                setCollaboratorAddress({
                  address: "",
                  isFailure: false,
                });
                setIsFormValid((prevState) => ({
                  ...prevState,
                  ["collaborators"]: isCollaboratorsValid,
                }));
                if (isCollaboratorsValid) {
                  const currentValue = getValues("collaborators");
                  const collaboratorUsername = currentValue.slice(1); // Removes @ from form input
                  await getCollaboratorAddress(collaboratorUsername);
                }
              }}
              maxLength={16}
            />
            <ErrorMessage
              errors={errors}
              name="collaborators"
              render={({ message }) => <p className="text-red">{message}</p>}
            />
            <InvalidCollaboratorMessage
              errors={errors}
              collaboratorAddressState={collaboratorAddress}
            />
          </div>
          <div className={formSection}>
            <label className={formLabelClass}>Contribution</label>
            <p className={formParagraphClass}>
              Described what you worked on together.
            </p>
            <textarea
              {...register("contributonData", {
                required: "This field is required.",
              })}
              className="w-full pl-6 py-2 border"
              placeholder="Built"
              onBlur={async () => {
                const isContributionDataValid = await trigger(
                  "contributonData"
                );
                setIsFormValid((prevState) => ({
                  ...prevState,
                  ["contributionData"]: isContributionDataValid,
                }));
              }}
            />
            <ErrorMessage
              errors={errors}
              name="contributonData"
              render={({ message }) => <p className="text-red">{message}</p>}
            />
          </div>
          {isConnected && (
            <div className={formSection}>
              <p className={formParagraphClass}>
                You are attesting from Ethereum address: {address}
              </p>
            </div>
          )}
          <p>By attesting you are confirming onchain.</p>
          <Button
            className="float-right"
            variant={
              isFormValid.collaborators && isFormValid.contributionData
                ? ButtonVariant.MAIN
                : ButtonVariant.IDLE
            }
            type="submit"
          >
            Attest
          </Button>
        </form>
      </Dialog>
    </>
  );
};

interface InvalidCollaboratorMessageProps {
  collaboratorAddressState: CollaboratorAddressState;
  errors: FieldErrors;
}

const InvalidCollaboratorMessage: React.FC<InvalidCollaboratorMessageProps> = ({
  collaboratorAddressState,
  errors,
}) => {
  return (
    <>
      {collaboratorAddressState.isFailure && !errors.collaborators && (
        <p className="text-red">
          We could not find a Farcaster account with that username. Please try
          agin.
        </p>
      )}
      {collaboratorAddressState.address.length > 0 && (
        <p className="text-green">
          Attesting to Eth address: {collaboratorAddressState.address}
        </p>
      )}
    </>
  );
};

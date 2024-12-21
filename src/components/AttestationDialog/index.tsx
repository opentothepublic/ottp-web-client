import { Button, ButtonVariant } from "@/components/common/Button";
import { attestOnChain } from "@/utils/blockchain/connectToEAS";
import Dialog from "@mui/material/Dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Dispatch, SetStateAction, useState } from "react";
import { useAccount } from "wagmi";
import { Transaction } from "@ethereum-attestation-service/eas-sdk";

const formLabelClass = "title-small mb-6";
const formParagraphClass = "my-2";
const formSection = "my-6";

type Inputs = {
  collaborators: string;
  contributonData: string;
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
  } = useForm<Inputs>();
  const [open, setOpen] = useState(false);

  const [isFormValid, setIsFormValid] = useState({
    collaborators: false,
    contributionData: false,
  });
  const { address, isConnected } = useAccount();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await attestOnChain(data.collaborators, data.contributonData);

    if (res) {
      setAttestationUid(res.newAttestationUID);
      setTransactionData(res.transaction);
    }
    reset();
    handleClose();
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
              Tag a collaborator, using their ethereum address.
            </p>
            <input
              {...register("collaborators", {
                required: "This field is required.",
                pattern: {
                  value: /^0x[a-fA-F0-9]{40}$/,
                  message: "Input must be an Ethereum address",
                },
              })}
              className="w-full pl-6 py-2 border"
              placeholder="0xabc123..."
              onBlur={async () => {
                const isCollaboratorsValid = await trigger("collaborators");
                setIsFormValid((prevState) => ({
                  ...prevState,
                  ["collaborators"]: isCollaboratorsValid,
                }));
              }}
            />
            <ErrorMessage
              errors={errors}
              name="collaborators"
              render={({ message }) => <p className="text-red">{message}</p>}
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

import { Button, ButtonVariant } from "@/components/common/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const formLabelClass = "title-small mb-6";
const formParagraphClass = "my-2";
const formSection = "my-6";

type Inputs = {
  collaborators: string;
  contributon: string;
  ethereumAddress: string;
};

export const AttestationDialog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<Inputs>();
  const [open, setOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const revalidateForm = async () => {
    const isValid = await trigger();
    setIsFormValid(isValid);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Open form dialog</Button>
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
              Tag collaborators, using their Farcaster usernames, e.g. @username
              @username @username. Separate each with a space.
            </p>
            <input
              {...register("collaborators", { required: true })}
              className="w-full pl-6 py-2 border"
              placeholder="@lowcodekrish @naaate @decipher @ting"
              onBlur={revalidateForm} // Trigger validation for all fields on blur
            />
          </div>
          <div className={formSection}>
            <label className={formLabelClass}>Contribution</label>
            <p className={formParagraphClass}>
              Described what you worked on together.
            </p>
            <textarea
              {...register("contributon", { required: true })}
              className="w-full pl-6 py-2 border"
              placeholder="Built"
              onBlur={revalidateForm} // Trigger validation for all fields on blur
            />
          </div>
          <div className={formSection}>
            <label className="title-small">Ethereum Address</label>
            <p className={formParagraphClass}>
              Select an Ethereum address to attest from
            </p>
            <input
              {...register("ethereumAddress", { required: true })}
              className="w-full pl-6 py-2 border"
              placeholder="Built"
              onBlur={revalidateForm} // Trigger validation for all fields on blur
            />
          </div>
          <p>By attesting you are confirming onchain.</p>

          <Button
            className="float-right"
            variant={isFormValid ? ButtonVariant.MAIN : ButtonVariant.IDLE}
            type="submit"
          >
            Add
          </Button>
        </form>
      </Dialog>
    </>
  );
};

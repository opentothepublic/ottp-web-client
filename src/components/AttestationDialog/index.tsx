import { Button, ButtonVariant } from "@/components/common/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PropsWithChildren, useState } from "react";

const formLabelClass = "title-small mb-6";
const formParagraphClass = "my-2";
const formSection = "my-6";

export const AttestationDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Open form dialog</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <form className="body-medium p-12">
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
              className="w-full pl-6 py-2 border"
              placeholder="@lowcodekrish @naaate @decipher @ting"
            />
          </div>
          <div className={formSection}>
            <label className={formLabelClass}>Contribution</label>
            <p className={formParagraphClass}>
              Described what you worked on together.
            </p>
            <textarea className="w-full pl-6 py-2 border" placeholder="Built" />
          </div>
          <div className={formSection}>
            <label className="title-small">Ethereum Address</label>
            <p className={formParagraphClass}>
              Select an Ethereum address to attest from
            </p>
            <input className="w-full pl-6 py-2 border" placeholder="Built" />
          </div>
          <p>By attesting you are confirming onchain.</p>

          <Button
            className="float-right"
            variant={ButtonVariant.IDLE}
            type="submit"
          >
            Add
          </Button>
        </form>
      </Dialog>
    </>
  );
};

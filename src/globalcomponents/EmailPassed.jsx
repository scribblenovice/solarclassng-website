import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CheckMark from "./CheckMark";

const EmailPassed = ({ open, closeModal }) => {
  //   const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const setChecked = () => {
    if (inputRef.current) {
      inputRef.current.checked = true;
    }
  };
  setTimeout(() => {
    if (open) {
      setChecked(true);
    }
  }, 1000);

  return (
    <>
      <Dialog
        open={open}
        handler={closeModal}
        size={"md"}
        className="grid place-items-center py-10"
      >
        <CheckMark inputRef={inputRef} checkClass="" />
        <DialogHeader className="text-center">YOUR MAIL HAS BEEN SENT!</DialogHeader>
        <DialogBody className="text-center siliguri text-lg text-gray-800 font-normal">
          Thank you for messaging Solar Class Ltd. We have received your mail and will respond as soon
          as possible.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={closeModal}
            className="justify-self-start"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default EmailPassed;

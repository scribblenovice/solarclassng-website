import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const EmailFailed = ({ open, closeModal }) => {
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
  }, 300);

  return (
    <>
      <Dialog
        open={open}
        handler={closeModal}
        size={"md"}
        className="grid place-items-center py-10"
      >
        {/* <CheckMark inputRef={inputRef} checkClass="" /> */}
        <div><i className="ri-close-circle-line text-6xl text-red-500"></i></div>
        <DialogHeader className="text-center">FAILED!</DialogHeader>
        <DialogBody className="text-center siliguri text-lg text-gray-800 font-normal">
          An error occured while sending your mail. Please check if your network
          connection is stable and try again.
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
export default EmailFailed;

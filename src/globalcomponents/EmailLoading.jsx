import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CheckMark from "./CheckMark";
 
const EmailLoading=({checkClass})=> {
  return (
    <>
      <Dialog open={true}  className="bg-transparent grid place-items-center shadow-none max-w-fit max-h-fit">
        <div className="text-white siliguri animate-pulse text-2xl font-semibold mb-5">Please Wait...</div>
        <CheckMark isOpen={false} checkClass={checkClass}/>
      </Dialog>
    </>
  );
}
export default EmailLoading;
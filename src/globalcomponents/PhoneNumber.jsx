import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({ inputName, handleChange, inputVal, errorTxt, inputId, errorClass }) => {
  return (
    <>
      <div id={inputId}>
        <PhoneInput
          defaultCountry="ng"
          name={inputName}
          value={inputVal}
          onChange={handleChange}
          inputStyle={{
            padding: "1.6rem",
            background: "transparent",
          }}
          inputClassName={`!border text-gray-900 ring-0 w-full focus:shadow-none !border-black !border-opacity-50 !outline-[#007bff]`}
          countrySelectorStyleProps={{
            buttonStyle: {
              padding: "1.6rem",
            },
            buttonClassName: `!border !border-black !border-opacity-50 text-gray-900`,
          }}
        />
        {errorTxt && <p className={`text-xs ${errorClass || "text-red-100"}`}>{errorTxt}</p>}
      </div>
    </>
  );
};
export default PhoneNumber;

import { useState } from "react";
import GlobalText from "./GlobalText";
import GlobalTextArea from "./GlobalTextArea";
import PhoneNumber from "./PhoneNumber";
import EmailLoading from "./EmailLoading";
import GlobalModal from "./EmailPassed";
import EmailFailed from "./EmailFailed";
import EmailPassed from "./EmailPassed";
import axios from "axios";

const ContactForm = () => {
  const [shake, setShake] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [phone, setPhone] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const capitalizeFirstLetter = (sentence) => {
    return sentence
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  const userName = capitalizeFirstLetter(formData.name);

  const payload = {
    name: userName.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message,
  };
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.name.trim() === "") {
      errors.name = "enter your name";
      isValid = false;
    }
    if (formData.email.trim() === "") {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }

    if (formData.subject.trim() === "") {
      errors.subject = "please enter a subject";
      isValid = false;
    }
    if (formData.phoneNumber.trim().length <= 4) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (formData.message === "") {
      errors.message = "please enter a message";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleChange2 = (phone, e) => {
    setPhone(phone);
    setFormData({
      ...formData,
      phoneNumber: phone,
    });
    console.log(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
    if (isValid) {
      setShake(false);
      setPending(true);
      setOpen(false);
      // Submit the form data or perform other actions
      axios
        .post("https://solarclassng-mail-service.onrender.com/receive-email", {
          ...payload,
        })
        .then((res) => {
          console.log(res);
          if (res) {
            setPending(false);
            setOpen(true);
            setEmailError(false);
          }
          if (res.data === "sent") {
            setPending(false);
            setOpen(true);
            setEmailError(false);
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
              phoneNumber: "",
            });
          }
        })
        .catch((error) => {
          // Handle error
          if (error.response) {
            setPending(false);
            setOpen(true);
            setEmailError(true);
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(
            //   "Server responded with a non-2xx status code:",
            //   error.response.status
            // );
            // console.log('Data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            setPending(false);
            setOpen(true);
            setEmailError(true);
            // console.log("No response received");
          } else {
            setPending(false);
            setOpen(true);
            setEmailError(true);
            // console.log("Error setting up the request:", error.message);
          }
          // console.log("Error config:", error.config);
        });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="ml-auto space-y-4 py-20"
      >
        <div>
          <label htmlFor="name" className="text-gray-800">
            Enter your Name
          </label>
          <GlobalText
            id={"name"}
            inputType={`text`}
            inputName={`name`}
            placeTxt={`Name`}
            handleChange={handleChange}
            inputVal={formData.name}
            className={`w-full rounded-md py-4 px-4 border border-black border-opacity-50 text-sm focus:outline-0`}
            errorTxt={formErrors.name}
            errorClass="text-red-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="text-gray-800">
              Enter your email Address
            </label>
            <GlobalText
              id={`email`}
              inputType={`email`}
              inputName={`email`}
              placeTxt={`Email`}
              handleChange={handleChange}
              inputVal={formData.email}
              className={`w-full rounded-md py-4 px-4 border border-black border-opacity-50 text-sm focus:outline-0`}
              errorTxt={formErrors.email}
              errorClass="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-800">
              Enter your phone number
            </label>
            <PhoneNumber
              inputVal={formData.phoneNumber}
              errorTxt={formErrors.phoneNumber}
              inputId={`phone`}
              handleChange={handleChange2}
              errorClass={`text-red-500`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <GlobalText
            id={`subject`}
            inputType={`text`}
            inputName={`subject`}
            placeTxt={`Subject`}
            handleChange={handleChange}
            inputVal={formData.subject}
            className={`w-full rounded-md py-4 px-4 border border-black border-opacity-50 text-sm focus:outline-0`}
            errorTxt={formErrors.subject}
            errorClass="text-red-500"
          />
        </div>
        <div>
          <label htmlFor="message">Enter your message</label>
          <GlobalTextArea
            value={formData.message}
            id="message"
            row={`6`}
            placeholderTxt={`Message`}
            inputName={`message`}
            inputStyle={{ resize: "none" }}
            className="w-full rounded-md px-4 border border-black border-opacity-50 text-sm pt-2.5 focus:outline-0"
            handleDrag={(e) => {
              e.preventDefault();
            }}
            handleChange={handleChange}
            errorTxt={formErrors.message}
            errorClass="text-red-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          class={`text-white text-lg bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md px-4 py-2.5 w-full ${
            shake ? "shake" : ""
          }`}
        >
          SEND
        </button>
      </form>
      {pending && <EmailLoading />}
      {!pending && !emailError && (
        <EmailPassed
          open={open}
          closeModal={() => {
            setOpen(!open);
          }}
        />
      )}
      {!pending && emailError && (
        <EmailFailed
          open={open}
          closeModal={() => {
            setOpen(!open);
          }}
        />
      )}
    </>
  );
};
export default ContactForm;

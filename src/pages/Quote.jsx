import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import GlobalTextArea from "../globalcomponents/GlobalTextArea";
import axios from "axios";
import { isEmptyObject } from "jquery";
import EmailLoading from "../globalcomponents/EmailLoading";
import EmailPassed from "../globalcomponents/EmailPassed";
import EmailFailed from "../globalcomponents/EmailFailed";

const Quote = () => {
  const [shake, setShake] = useState(false);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        .post(
          "https://solarclassng-mail-service-rg38.onrender.com/receive-email",
          {
            ...payload,
          }
        )
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
      <div class="py-20 bg-gray-50">
        <div class="grid md:grid-cols-2 items-center gap-16 mx-auto w-[90%] rounded-md text-[#333] siliguri">
          <div>
            <h1 class="text-3xl font-extrabold text-gray-900">
              GET A QUOTE FROM US
            </h1>
            <p class="siliguri mt-3 text-lg leading-8 font-normal tracking-wide text-gray-900">
              Discover our range of tailored solutions, including solar, access
              control, ICT, and expert tech consulting. Our specialists
              collaborate closely with you to understand your needs, offering
              customized quotes that fit your budget and timeline. With our
              commitment to excellence and innovation, we're here to help you
              leverage technology for success. Request a quote today and see the
              impact our solutions can have on your business!
            </p>
            <div class="mt-12 siliguri text-gray-900">
              <h2 class="text-lg font-medium">Email</h2>
              <ul class="mt-3">
                <li class="flex items-center">
                  <div class="bg-solar-blue h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    target="blank"
                    href="mailto:contact@solarclassng.com"
                    class=" ml-3"
                  >
                    <small class="block">Send us an email</small>
                    <p className="font-medium">contact@solarclassng.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            action="https://www.solarclassng.com/qservers_mail.php"
            method="POST"
            class="space-y-4"
          >
            <GlobalText
              inputType={`text`}
              inputName={`name`}
              placeTxt={`Name`}
              inputVal={formData.name}
              className={`w-full rounded-md py-2.5 px-4 border-[1px] text-sm border-gray-700`}
              handleChange={handleChange}
              errorTxt={formErrors.name}
            />
            <GlobalText
              inputType={`email`}
              inputName={`email`}
              placeTxt={`Email`}
              inputVal={formData.email}
              className={`w-full rounded-md py-2.5 px-4 border-[1px] text-sm border-gray-700`}
              handleChange={handleChange}
              errorTxt={formErrors.email}
            />
            <GlobalText
              inputType={`text`}
              inputName={`subject`}
              placeTxt={`Subject`}
              inputVal={formData.subject}
              className={`w-full rounded-md py-2.5 px-4 border-[1px] text-sm border-gray-700`}
              handleChange={handleChange}
              errorTxt={formErrors.subject}
            />
            <GlobalTextArea
              value={formData.message}
              row={`6`}
              placeholderTxt={`Message`}
              inputName={`message`}
              inputStyle={{ resize: "none" }}
              className="w-full rounded-md px-4 border-[1px] text-sm pt-2.5 border-gray-700"
              handleDrag={(e) => {
                e.preventDefault();
              }}
              errorTxt={formErrors.message}
              handleChange={handleChange}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class={`text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-lg px-4 py-2.5 w-full ${
                shake ? "shake" : ""
              }`}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
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
export default Quote;

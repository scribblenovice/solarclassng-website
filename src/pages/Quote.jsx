import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import GlobalTextArea from "../globalcomponents/GlobalTextArea";
import axios from "axios";
import { isEmptyObject } from "jquery";

const Quote = () => {
  const [shake, setShake] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const payload = {
    name: formData.name.trim(),
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
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("http://localhost:3001/receive-email", { ...payload })
        .then((res) => {
          console.log(res)
          // if (res.data.status === "registered") {
          //   sessionStorage.setItem("isRegistered", true);
          //   navigate("/launchpad/thank-you");
          // }
          // if (res.data.status === "alreadysignedup") {
          //   setModalError(true);
          //   setOpen(true);
          //   setMessage("YOU HAVE ALREADY SIGNED UP FOR THE COHORT!");
          // }
          // if (res.data.status === "failed") {
          //   setModalError(true);
          //   setOpen(true);
          //   setMessage("REGISTRATION FAILED, PLEASE TRY AGAIN!");
          // }
        });
    }
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
  };

  return (
    <div class="py-20 ictbg bg-fixed bg-blend-multiply bg-gray-700 bg-center">
      <div class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto w-[90%] bg-solar-blue shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 class="text-3xl font-extrabold text-white">GET A QUOTE</h1>
          <p class="siliguri mt-3 text-base leading-7 text-gray-300">
            Discover our range of tailored solutions, including solar, access
            control, ICT, and expert tech consulting. Our specialists
            collaborate closely with you to understand your needs, offering
            customized quotes that fit your budget and timeline. With our
            commitment to excellence and innovation, we're here to help you
            leverage technology for success. Request a quote today and see the
            impact our solutions can have on your business!
          </p>
          <div class="mt-12 siliguri">
            <h2 class="text-lg text-white font-extrabold">Email</h2>
            <ul class="mt-3">
              <li class="flex items-center">
                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
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
                  class="text-gray-300 ml-3"
                >
                  <small class="block">Send us an email</small>
                  <strong>contact@solarclassng.com</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form
        onSubmit={handleSubmit}
          // action="https://fabform.io/f/xxxxx"
          method="post"
          class="ml-auo space-y-4"
        >
          <GlobalText
            inputType={`text`}
            inputName={`name`}
            placeTxt={`Name`}
            className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]`}
            handleChange={handleChange}
            errorTxt={formErrors.name}
          />
          <GlobalText
            inputType={`email`}
            inputName={`email`}
            placeTxt={`Email`}
            className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]`}
            handleChange={handleChange}
            errorTxt={formErrors.email}
          />
          <GlobalText
            inputType={`text`}
            inputName={`subject`}
            placeTxt={`Subject`}
            className={`w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]`}
            handleChange={handleChange}
            errorTxt={formErrors.subject}
          />
          <GlobalTextArea
            row={`6`}
            placeholderTxt={`Message`}
            inputName={`message`}
            inputStyle={{ resize: "none" }}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
            handleDrag={(e) => {
              e.preventDefault();
            }}
            errorTxt={formErrors.message}
            handleChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            class={`text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full ${
              shake ? "shake" : ""
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Quote;
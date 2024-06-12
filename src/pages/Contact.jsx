import { useEffect, useState } from "react";

import contactImg from "../assets/contact_image.jpg";

function Contact() {
  const [messageData, setMessageData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bca47e8e-cc3a-4d84-a9bb-57576ed3b2c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      if (!name.trim()) {
        setNameError("Name Can't be Empty");
        return;
      } else {
        setNameError("");
      }

      if (!email.trim()) {
        setEmailError("Email Can't be Empty");
        return;
      } else if (!isValidEmail(email.trim())) {
        setEmailError("Invalid Email Format");
        return;
      } else {
        setEmailError("");
      }

      if (!message.trim()) {
        setMessageError("Message Can't be Empty");
        return;
      } else {
        setMessageError("");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessageData(res.message);
        setName("");
        setEmail("");
        setMessage("");
        console.log("Success", res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageData("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [messageData]);

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section
      id="contact"
      className="py-60 h-min md:h-screen w-[clamp(30rem,90%,120rem)]  m-auto border-b-[1px] dark:border-gray-600 border-gray-300"
    >
      <h1 className="text-center text-5xl font-bold mb-10">Contact Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white py-10 rounded-xl shadow-[0_0_1.5rem_1rem_rgba(0,0,0,0.1)] w-[clamp(30rem,90%,100rem)] m-auto">
        <img
          src={contactImg}
          alt=""
          className="w-full h-full hidden lg:block object-cover
          "
        />
        <form
          onSubmit={onSubmit}
          className=" w-full lg:w-[clamp(30rem,90%,45rem)] m-auto p-10 rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-2xl text-gray-700 mb-4 font-semibold">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`p-3 border-[1px] ${
                nameError ? "border-red-500" : "border-gray-300"
              } text-xl rounded-md text-gray-700 w-full mb-2`}
            />
            {nameError && (
              <small className="text-red-500 text-xl md:text-2xl ">
                {nameError}
              </small>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-2xl text-gray-700 mb-4 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-3 border-[1px] ${
                emailError ? "border-red-500" : "border-gray-300"
              } text-xl rounded-md text-gray-700 w-full mb-2`}
            />

            {emailError && (
              <small className="text-red-500 text-xl md:text-2xl ">
                {" "}
                {emailError}
              </small>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-2xl text-gray-700 mb-4 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`p-3 border-[1px] ${
                messageError ? "border-red-500" : "border-gray-300"
              } text-xl rounded-md text-gray-700 w-full mb-2`}
            ></textarea>
            {messageError && (
              <small className="text-red-500 text-xl md:text-2xl ">
                {messageError}
              </small>
            )}
          </div>
          <small className="text-green-500 text-2xl mb-4">{messageData}</small>
          <button
            type="submit"
            className="mt-4 py-3 w-full text-2xl bg-gray-900 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

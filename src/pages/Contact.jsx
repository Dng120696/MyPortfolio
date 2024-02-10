import { useEffect } from "react";
import { useState } from "react";

function Contact() {
  const [messageData, setMessageData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bca47e8e-cc3a-4d84-a9bb-57576ed3b2c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (!message || !email || !name) return;
    try {
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
  return (
    <div
      id="contact"
      className=" py-60 h-screen w-[clamp(30rem,90%,120rem)]  m-auto border-b-[1px] dark:border-gray-600 border-gray-300 "
    >
      <h1 className="text-center text-5xl font-bold mb-10">Contact Me</h1>
      <form
        onSubmit={onSubmit}
        className="w-[50rem] m-auto shadow-[0_0_1rem_rgba(0,0,0,0.1)] p-10 bg-white rounded-lg"
      >
        <div className="mb-8">
          <label className="block text-2xl  text-gray-700  mb-4 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border-[1px] text-xl rounded-md text-gray-700  w-full"
          />
        </div>
        <div className="mb-8">
          <label className="block text-2xl  text-gray-700 mb-4 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border-[1px] text-xl rounded-md text-gray-700  w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-2xl text-gray-700  mb-4 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border-[1px] text-xl rounded-md text-gray-700  w-full"
          ></textarea>
        </div>
        <small className="text-green-500 text-2xl mb-4">{messageData}</small>
        <button
          type="submit"
          className=" mt-4 py-3 w-full text-2xl bg-gray-900 text-white rounded-lg"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;

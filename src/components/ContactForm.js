import React, {useState} from "react";
import { Form } from "react-router-dom";
import { FiArrowUpRight, FiUserPlus } from "react-icons/fi";
import { useSendContact } from "../hooks/useSendContact";

export const ContactForm = () => {
  const { sendContact } = useSendContact("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name && email && message) {
      await sendContact({
        name: name,
        email: email,
        message: message,
      });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Please fill in all required fields.");
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Full Name{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="w-full outline-none h-10 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Email{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 outline-none bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Message{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <p className="plus-jakarta-sans-body text-black mb-2 text-opacity-60 text-xs">
          Please provide a preliminary description of your envisioned
          partnership, including your objectives and expectations from this
          collaboration with SFU Robot Soccer.
        </p>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="w-full outline-none h-32 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 py-2 tracking-wide rounded-md"
        />
      </div>

      <button
        id="buttonPrimary"
        onClick={onSubmit}
        className="flex w-max items-center gap-2 mt-4 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
      >
        Send Message <FiArrowUpRight strokeWidth={3} />{" "}
      </button>
    </form>
  );
};
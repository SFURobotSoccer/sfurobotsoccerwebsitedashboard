import React, {useState} from "react";
import { Form } from "react-router-dom";
import { FiArrowUpRight, FiUserPlus } from "react-icons/fi";
import { useSendSponsors } from "../../hooks/useSendSponsors";

export const BecomeSponsorForm = () => {
  const { sendSponsors } = useSendSponsors("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Full Name{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <input className="w-full outline-none h-10 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md" />
      </div>

      <div className="flex flex-row gap-4 items-end">
        <div className="flex flex-col gap-1 w-1/2">
          <label className="plus-jakarta-sans-button text-sm">
            Company/Organization{" "}
            <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
              (Required)
            </span>
          </label>
          <input className="w-full outline-none h-10 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <label className="plus-jakarta-sans-button text-sm">
            Job Title{" "}
            <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
              (Required)
            </span>
          </label>
          <input className="w-full outline-none h-10 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md" />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Email{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <input className="w-full h-10 outline-none bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md" />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Sponsorship Package Level{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <div className="relative">
          <select
            onChange={(e) => setSponsorshipPackage(e.target.value)}
            className="w-full outline-none h-10 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 tracking-wide rounded-md appearance-none rounded py-2 pl-3 pr-10"
          >
            <option value="Bronze">Visionary Sponsor</option>
            <option value="Silver">Community Sponsor</option>
            <option value="Gold">Visionary Sponsor</option>
            <option value="Platinum">Innovation Partner</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="plus-jakarta-sans-button text-sm">
          Message{" "}
          <span className="plus-jakarta-sans-body text-black text-opacity-30 ml-1 text-xs">
            (Required)
          </span>
        </label>
        <p className="plus-jakarta-sans-body text-black text-opacity-60 text-xs">
          Please provide a preliminary description of your envisioned
          partnership, including your objectives and expectations from this
          collaboration with SFU Robot Soccer.
        </p>
        <textarea className="w-full outline-none h-32 bg-gray-100 flex items-center gap-2 plus-jakarta-sans-body text-sm px-3 py-2 tracking-wide rounded-md" />
      </div>

      <button
        id="buttonPrimary"
        className="flex w-max items-center gap-2 mt-4 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
      >
        Submit Application <FiArrowUpRight strokeWidth={3} />{" "}
      </button>
    </form>
  );
};

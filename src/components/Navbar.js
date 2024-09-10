import SFUrsLogo from "../images/SFURobotSoccerLogo.png";
import { FiHome, FiUserPlus } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const changePage = (page) => {
    navigate(`/${page}`);
    window.scrollTo(0, 0);
    setOpen(false);
  };

  const isHomeActive = location.pathname === "/";
  const isTeamsActive = location.pathname.includes("/teams");
  const isAboutActive = location.pathname.includes("about");
  const isContactActive = location.pathname.includes("contact");
  const isSponsorsActive = location.pathname.includes("sponsors");

  return (
    <div className="z-50 w-full border-black border-opacity-5 h-20 lg:h-16 navBorder fixed bg-white flex items-center flex-row">
      <button
        className="flex flex-row items-center gap-2 ml-6"
        onClick={() => changePage("")}
      >
        <div className="w-8 h-8">
          <img src={SFUrsLogo} alt="SFURobotSoccerLogo" />
        </div>
        <h1 className="text-md lg:text-md tracking-wide text-black plus-jakarta-sans-heading ">
          SFU Robot Soccer
        </h1>
      </button>
      <button
        id={isTeamsActive ? "buttonPrimary" : "buttonSecondary"}
        onClick={() => changePage("teams")}
        className="ml-5 flex items-center hidden lg:flex gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
      >
        <FiUsers strokeWidth={3} size={13} />
        <h1 className="plus-jakarta-sans-button tracking-wider text-sm">
          Teams
        </h1>
      </button>
      <button
        id={isSponsorsActive ? "buttonPrimary" : "buttonSecondary"}
        onClick={() => changePage("sponsors")}
        className="ml-5 flex items-center hidden lg:flex gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
      >
        <FiTrendingUp strokeWidth={3} size={13} />
        <h1 className="plus-jakarta-sans-button tracking-wider text-sm">
          Sponsors
        </h1>
      </button>
      <button
        id={isAboutActive ? "buttonPrimary" : "buttonSecondary"}
        onClick={() => changePage("about")}
        className="ml-5 flex items-center hidden lg:flex gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
      >
        <FiInfo strokeWidth={3} size={13} />
        <h1 className="plus-jakarta-sans-button tracking-wider text-sm">
          About
        </h1>
      </button>
      <button
        id={isContactActive ? "buttonPrimary" : "buttonSecondary"}
        onClick={() => changePage("contact")}
        className="ml-5 flex items-center hidden lg:flex gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
      >
        <FiMail strokeWidth={3} size={13} />
        <h1 className="plus-jakarta-sans-button tracking-wider text-sm">
          Contact
        </h1>
      </button>
      <div className="fixed right-8 flex items-center flex-row gap-6">
        <div className="flex lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </div>
        <Link
          id="buttonPrimary"
          to={`/join`}
          className="hidden lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
        >
          {" "}
          <FiUserPlus strokeWidth={3} /> Join our Team
        </Link>
      </div>
      {isOpen && (
        <div className="flex flex-col flex lg:hidden slideIn fixed top-20 pt-10 gap-4 left-0 w-full h-full bg-white opacity-100 z-40 text-white">
          {/* <button
            id={isHomeActive ? "buttonPrimary" : "buttonSecondary"}
            onClick={() => changePage("")}
            className="items-center z-60 flex gap-3 text-sm h-max px-6 w-2/3 ml-10 flex flex-start py-3 tracking-wider rounded-md"
          >
            <FiHome strokeWidth={3} size={18} />
            <h1 className="plus-jakarta-sans-button tracking-wider text-lg">
              Home
            </h1>
          </button> */}

          <button
            id={isTeamsActive ? "buttonPrimary" : "buttonSecondary"}
            onClick={() => changePage("teams")}
            className="items-center z-60 flex gap-3 text-sm h-max px-6 w-2/3 ml-10 flex flex-start py-3 tracking-wider rounded-md"
          >
            <FiUsers strokeWidth={3} size={18} />
            <h1 className="plus-jakarta-sans-button tracking-wider text-lg">
              Teams
            </h1>
          </button>

          <button
            id={isSponsorsActive ? "buttonPrimary" : "buttonSecondary"}
            onClick={() => changePage("sponsors")}
            className="items-center z-60 flex gap-3 text-sm h-max px-6 w-2/3 ml-10 flex flex-start py-3 tracking-wider rounded-md"
          >
            <FiTrendingUp strokeWidth={3} size={18} />
            <h1 className="plus-jakarta-sans-button tracking-wider text-lg">
              Sponsors
            </h1>
          </button>

          <button
            id={isAboutActive ? "buttonPrimary" : "buttonSecondary"}
            onClick={() => changePage("about")}
            className="items-center z-60 flex gap-3 text-sm h-max px-6 w-2/3 ml-10 flex flex-start py-3 tracking-wider rounded-md"
          >
            <FiInfo strokeWidth={3} size={18} />
            <h1 className="plus-jakarta-sans-button tracking-wider text-lg">
              About
            </h1>
          </button>

          <button
            id={isContactActive ? "buttonPrimary" : "buttonSecondary"}
            onClick={() => changePage("contact")}
            className="items-center z-60 flex gap-3 text-sm h-max px-6 w-2/3 ml-10 flex flex-start py-3 tracking-wider rounded-md"
          >
            <FiMail strokeWidth={3} size={18} />
            <h1 className="plus-jakarta-sans-button tracking-wider text-lg">
              Contact
            </h1>
          </button>
        </div>
      )}
    </div>
  );
};

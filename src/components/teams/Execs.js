import { FiArrowUpRight, FiBox, FiCode, FiGitPullRequest, FiSliders, FiTerminal, FiTool, FiLinkedin, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import zachSpencer from '../../images/peopleimages/zach_spencer.webp';
import mani from '../../images/peopleimages/mani.webp';
import thomasChallis from "../../images/peopleimages/thomas_challis.webp";
import defaultPhoto from "../../images/peopleimages/default_profile.webp";
import jerryHo from "../../images/peopleimages/jerry.webp";
import julianHosseini from "../../images/peopleimages/julian.webp";
import jayKewalramani from "../../images/1710526962488.webp";
import zacharyGoodman from "../../images/peopleimages/zachary.webp";
import sukhrajPureWal from "../../images/sukhrajPurewal.webp";
import jonathanUng from "../../images/jonathanUng.webp";
import hoomehrMangoli from "../../images/peopleimages/hoomehrMangoli.jpg";
import nathanLeung from "../../images/peopleimages/Nathan Leung.webp";
import emmaQiu from "../../images/emmaQiu.jpeg";
import anmolDhaliwal from "../../images/anmolDhaliwal2.png";
export const Execs = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const teamMembers = [
    {
      image: zachSpencer,
      name: "Zach Spencer",
      role: "President/Electronics Team Lead",
      linkedIn: "https://www.linkedin.com/in/zachary-k-spencer/",
    },
    {
      image: thomasChallis,
      name: "Thomas Challis",
      role: "VP of Public Relations",
      linkedIn: "https://www.linkedin.com/in/thomas-challis-36460b1ba/",
    },
    // {
    //   image: jerryHo,
    //   name: "Jerry Hu",
    //   role: "VP of Finance",
    //   linkedIn: "https://www.linkedin.com/in/-jerry-hu/",
    // },
    // {
    //   image: nathanLeung,
    //   name: "Nathan Leung",
    //   role: "VP of Operations",
    //   linkedIn: "https://www.linkedin.com/in/nathan-leung-441832246/",
    // },
    {
      image: jayKewalramani,
      name: "Jay Kewalramani",
      role: "VP Administration",
      linkedIn: "https://www.linkedin.com/in/jay-kewalramani-645510259/",
    },
    {
      image: defaultPhoto,
      name: "Felicia Jayasaputra",
      role: "VP Public Relations",
      linkedIn: "www.linkedin.com/in/feliciajayasaputra02",
    },
    // {
    //   image: anmolDhaliwal,
    //   name: "Anmol Dhaliwal",
    //   role: "VP Public Relations",
    //   linkedIn: "http://www.linkedin.com/in/anmol-dhaliwal-75a12b1b9",
    // },
    {
      image: emmaQiu,
      name: "Emma Qiu",
      role: "Business Team Lead",
      linkedIn: "https://www.linkedin.com/in/emma-qiu-229635327",
    },
    {
      image: mani,
      name: "Mani Samet",
      role: "Firmware Team Leader",
      linkedIn: "https://www.linkedin.com/in/mani-samet-6b7288260/",
    },
    {
      image: zacharyGoodman,
      name: "Zachary Goodman",
      role: "Mechanics Team Lead",
      linkedIn: "https://www.linkedin.com/in/zachary-goodman-2738a5270/",
    },
    {
      image: sukhrajPureWal,
      name: "Sukhraj Purewal",
      role: "Software Team Co-Leader",
      linkedIn: "https://www.linkedin.com/in/sukhraj-purewal-78b6b1222/",
    },
    {
      image: jonathanUng,
      name: "Jonathan Keith Ung",
      role: "Software Team Co-Leader",
      linkedIn: "https://www.linkedin.com/in/jonathan-ung-1193a2238/",
    },
    {
      image: hoomehrMangoli,
      name: "Hoomehr Mangoli",
      role: "Head of Electronics Engineering",
      linkedIn: "https://www.linkedin.com/in/hoomehr-mangoli-4a2187bb/",
    },
    // {
    //   image: sukhrajPureWal,
    //   name: "Jimmy...",
    //   role: "Head of Software Engineering",
    //   linkedIn: "https://www.linkedin.com/in/sukhraj-purewal-78b6b1222/",
    // },
  ];

  return (
    <>
      <button
        onClick={handlePress}
        className="plus-jakarta-sans-heading text-xl mt-16 flex items-center gap-2"
      >
        Executive Team{" "}
        {isOpen ? (
          <FiArrowDown className="spin" strokeWidth={3} />
        ) : (
          <FiArrowUp className="spin" strokeWidth={3} />
        )}
      </button>
      {isOpen ? (
        <div className="w-full h-max flex gap-14 items-center justify-center lg:justify-start mt-6 flex-wrap">
          {teamMembers.map((exec, index) => (
            <div
              key={index}
              className="px-4 py-3 text-left flex rounded-xl flex-col w-52 flex items-center justify-center"
            >
              <div className="w-24 h-24 overflow-hidden rounded-full mb-4">
                <img src={exec.image}></img>
              </div>
              <h4 className="plus-jakarta-sans-heading text-md text-center mb-1 flex flex-row items-center gap-2">
                {exec.name}
              </h4>
              <p className="plus-jakarta-sans-body text-center text-xs w-2/3">
                {exec.role}
              </p>
              {exec.linkedIn != null && (
                <p className="icons text-3xl text-center">
                  <a
                    href={exec.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ì
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-max flex gap-14 mt-6 flex-wrap"></div>
      )}
    </>
  );
};

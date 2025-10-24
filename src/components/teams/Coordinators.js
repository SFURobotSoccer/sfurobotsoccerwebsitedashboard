import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import React, {useState} from "react";
import richKo from '../../images/peopleimages/default_profile.webp';
import rahimDharamsi from '../../images/peopleimages/rahim.webp';
import clarenceCheng from "../../images/peopleimages/clarenceCheng.jpeg";
import parmSidhu from "../../images/peopleimages/parmSidhu.jpeg";
import juliaSun from "../../images/peopleimages/juliaSun.jpeg";
import mohnishDevarapalli from "../../images/peopleimages/mohnish.webp";
import willAlmeida from "../../images/WillDeAlmeida.webp";
import harjotSingh from "../../images/peopleimages/harjotSingh.webp";
import jayKewalramani from "../../images/1710526962488.webp";
import adamNguyen from "../../images/adamNguyen.jpeg";
import aliRzvi from "../../images/peopleimages/Ali Rizvi.webp";

export const Coordinators = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const coordinators = [
    // {
    //   image: willAlmeida,
    //   name: "Will de Almeida",
    //   role: "Corporate Relations Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/willdalmeida/",
    // },
    // {
    //   image: richKo,
    //   name: "Job Macatangay",
    //   role: "Corporate Relations Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/job-macatangay-5a5330275/",
    // },
    // {
    //   image: richKo,
    //   name: "Teddy Atulya",
    //   role: "Corporate Relations Coordinator",
    //   linkedIn: "https://www.linkedin.com/company/sfurs/",
    // },
    {
      image: harjotSingh,
      name: "Harjot Singh",
      role: "Web Development Coordinator",
      linkedIn: "https://www.linkedin.com/in/harjotsingh7/",
    },
    // {
    //   image: adamNguyen,
    //   name: "Adam Nguyen",
    //   role: "Graphic Design Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/adam-nguyen-02b522312/",
    // },
    // {
    //   image: aliRzvi,
    //   name: "Ali Rizvi",
    //   role: "Accounting Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/ali-rizvi-89a7a1250/",
    // },
    // {
    //   image: jayKewalramani,
    //   name: "Jay Kewalramani",
    //   role: "Marketing Coordinator",
    //   linkedIn:
    //     "https://www.linkedin.com/in/jay-kewalramani-645510259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // },
    // {
    //   image: richKo,
    //   name: "Masa Wong",
    //   role: "Outreach Coordinator",
    //   linkedIn: "https://www.linkedin.com/company/sfurs/",
    // },
    {
      image: clarenceCheng,
      name: "Clarence Cheng",
      role: "Finance Coordinator",
      linkedIn: "https://www.linkedin.com/in/clarencecheng1/",
    },
    {
      image: parmSidhu,
      name: "Parm Sidhu",
      role: "Finance Coordinator",
      linkedIn: "https://www.linkedin.com/in/parm-s-sidhu/",
    },
    {
      image: juliaSun,
      name: "Julia Sun",
      role: "Graphic Design Coordinator",
      linkedIn: "https://www.linkedin.com/in/juliamsun/",
    },
    {
      image: rahimDharamsi,
      name: "Rahim Dharamsi",
      role: "Outreach Coordinator",
      linkedIn: "https://www.linkedin.com/in/rahim-dharamsi-631862263/",
    },
    // {
    //   image: mohnishDevarapalli,
    //   name: "Mohnish Devarapalli",
    //   role: "Outreach Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/mohnish-devarapalli-07741b26b/",
    // },
    {
      image: richKo,
      name: "Rich Ko",
      role: "Outreach Coordinator",
      linkedIn: "https://www.linkedin.com/company/sfurs/",
    },
    // {
    //   image: richKo,
    //   name: "Winston Thov",
    //   role: "Outreach Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/winston-thov-2209a120b/",
    // },
    // {
    //   image: richKo,
    //   name: "Ricky",
    //   role: "Finance Coordinator",
    //   linkedIn: "https://www.linkedin.com/in/rickyygcheng/",
    // },
  ];

  return (
    <>
      <button
        onClick={handlePress}
        className="plus-jakarta-sans-heading text-xl mt-16 flex items-center gap-2"
      >
        Coordinators{" "}
        {isOpen ? (
          <FiArrowDown className="spin" strokeWidth={3} />
        ) : (
          <FiArrowUp className="spin" strokeWidth={3} />
        )}
      </button>
      {isOpen ? (
        <div className="w-full h-max flex gap-14 items-center justify-center lg:justify-start mt-6 flex-wrap">
          {coordinators.map((exec, index) => (
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
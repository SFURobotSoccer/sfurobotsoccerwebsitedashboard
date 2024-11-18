import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import React, {useState} from "react";
import harjotSingh from '../../images/peopleimages/harjotSingh.webp';
import jayKewalramani from "../../images/1710526962488.webp";
import adamNguyen from "../../images/adamNguyen.jpeg";
import aliRzvi from "../../images/peopleimages/Ali Rizvi.webp";

export const Directors = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const directors = [
    {
      image: harjotSingh,
      name: "Harjot Singh",
      role: "Director of Web Developent",
      linkedIn: "https://www.linkedin.com/in/harjotsingh7/",
    },
    {
      image: adamNguyen,
      name: "Adam Nguyen",
      role: "Director of Graphic Design",
      linkedIn: "https://www.linkedin.com/in/adam-nguyen-02b522312/",
    },
    {
      image: aliRzvi,
      name: "Ali Rizvi",
      role: "Director of Accounting",
      linkedIn: "https://www.linkedin.com/in/ali-rizvi-89a7a1250/",
    },
    {
      image: jayKewalramani,
      name: "Jay Kewalramani",
      role: "Director of Marketing",
      linkedIn:
        "https://www.linkedin.com/in/jay-kewalramani-645510259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <>
      <button
        onClick={handlePress}
        className="plus-jakarta-sans-heading text-xl mt-16 flex items-center gap-2"
      >
        Directors{" "}
        {isOpen ? (
          <FiArrowDown className="spin" strokeWidth={3} />
        ) : (
          <FiArrowUp className="spin" strokeWidth={3} />
        )}
      </button>
      {isOpen ? (
        <div className="w-full h-max flex gap-14 items-center justify-center lg:justify-start mt-6 flex-wrap">
          {directors.map((exec, index) => (
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
              <p className="icons text-3xl text-center">
                <a
                  href={exec.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ì
                </a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-max flex gap-14 mt-6 flex-wrap"></div>
      )}
    </>
  );
};

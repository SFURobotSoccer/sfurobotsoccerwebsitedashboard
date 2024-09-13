import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import React, {useState} from "react";
import harjotSingh from '../../images/peopleimages/harjotSingh.webp';
import jerryHo from '../../images/peopleimages/jerry.webp';
import quinKohlman from "../../images/QuinKohlman.webp";
import estherCho from "../../images/peopleimages/esther.webp";

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
      image: jerryHo,
      name: "Jerry Hu",
      role: "Director of Accounting",
      linkedIn: "https://www.linkedin.com/in/-jerry-hu/",
    },
    {
      image: estherCho,
      name: "Esther Cho",
      role: "Director of Internal Relations",
      linkedIn: "https://www.linkedin.com/in/esther-cho-90597a25a/",
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
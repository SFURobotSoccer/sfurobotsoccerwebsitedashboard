import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import React, {useState} from "react";
import arvinAmini from '../../images/peopleimages/arvin.webp';
import georgeLertzmanLepofsky from '../../images/peopleimages/george.webp';
import amitisHaghdadi from '../../images/peopleimages/amitis.webp';
import taraKazemi from '../../images/peopleimages/tara.webp';
import jordanLei from '../../images/peopleimages/jordan.webp';
import damoonTahmasbi from '../../images/peopleimages/damoon.webp';
import carloClores from '../../images//peopleimages/carlo.webp';
import dylanReviczky from '../../images/peopleimages/dylan.webp';
import aidanGerrebos from '../../images/peopleimages/aidan.webp';
import juddFoster from '../../images/peopleimages/judd.webp';
import martinKeivanloo from '../../images/peopleimages/martin.webp';
import adamSpelrem from "../../images/peopleimages/adam_spelrem.webp";
import matthewdoSantosZounon from "../../images/matthew.webp";

export const Alumni = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const alumni = [
    {
      image: arvinAmini,
      name: "Arvin Amini",
      role: "President",
      linkedIn: "https://www.linkedin.com/in/arvin-amini/",
    },
    {
      image: georgeLertzmanLepofsky,
      name: "George Lertzman Lepofsky",
      role: "VP of Administration",
      linkedIn: "https://www.linkedin.com/in/georgelertzmanlepofsky/",
    },
    {
      image: amitisHaghdadi,
      name: "Amitis Haghdadi",
      role: "Vice President",
      linkedIn: "https://www.linkedin.com/in/amitis-haghdadi/",
    },
    {
      image: taraKazemi,
      name: "Tara Kazemi",
      role: "VP of Finance",
      linkedIn: null,
    },
    {
      image: adamSpelrem,
      name: "Adam Spelrem",
      role: "VP of Finance",
      linkedIn: "https://www.linkedin.com/in/adam-spelrem-8b5059256/",
    },
    {
      image: jordanLei,
      name: "Jordan Lei",
      role: "VP of Finance",
      linkedIn: "https://www.linkedin.com/in/jordanlei/",
    },
    {
      image: damoonTahmasbi,
      name: "Damoon Tahmasbi",
      role: "Software Team Lead",
      linkedIn: "https://www.linkedin.com/in/damoon-tahmasbi/",
    },
    {
      image: carloClores,
      name: "Carlo Clores",
      role: "Mechanics Team Lead",
      linkedIn: "https://www.linkedin.com/in/carloclores/",
    },
    {
      image: dylanReviczky,
      name: "Dylan Reviczky",
      role: "Software Team Lead",
      linkedIn: "https://www.linkedin.com/in/dylanrev/",
    },
    {
      image: aidanGerrebos,
      name: "Aidan Gerrebos",
      role: "Mechanics Team Lead",
      linkedIn: "https://www.linkedin.com/in/aidan-gerrebos/",
    },
    {
      image: juddFoster,
      name: "Judd Foster",
      role: "Electronics Team Lead",
      linkedIn: "https://www.linkedin.com/in/judd-foster-568963193/",
    },
    {
      image: martinKeivanloo,
      name: "Martin Keivanloo",
      role: "Director of Outreach",
      linkedIn: null,
    },
    {
      image: matthewdoSantosZounon,
      name: "Matthew do Santos-Zounon",
      role: "Software Team Lead",
      linkedIn: "https://www.linkedin.com/in/zach-spencer",
    },
  ];

  return (
    <>
      <button
        onClick={handlePress}
        className="plus-jakarta-sans-heading text-xl mt-16 flex items-center gap-2"
      >
        Alumni{" "}
        {isOpen ? (
          <FiArrowDown className="spin" strokeWidth={3} />
        ) : (
          <FiArrowUp className="spin" strokeWidth={3} />
        )}
      </button>
      {isOpen ? (
        <div className="w-full h-max flex gap-14 items-center justify-center lg:justify-start mt-6 flex-wrap">
          {alumni.map((exec, index) => (
            <div
              key={index}
              className="px-4 py-0 text-left flex rounded-xl flex-col w-52 flex items-center justify-center"
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
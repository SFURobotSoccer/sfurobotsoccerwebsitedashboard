import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { FiArrowLeft, FiArrowUpRight, FiFileText } from "react-icons/fi"
import firmwareDeveloperPDF from '../files/FirmwareDeveloper.pdf';
import firmwareLeadPDF from '../files/FirmwareTeamLead.pdf';
import julianHosseini from '../images/peopleimages/julian.webp';
import zachSpencer from "../images/peopleimages/zach_spencer.webp";
import hoomehrMangoli from "../images/peopleimages/hoomehrMangoli.jpg";
import defaultPhoto from "../images/peopleimages/default_profile.webp";

export const ElectronicsTeam = () => {
  const openRoles = [
    // {
    //   name: "Electronics Co-Lead",
    //   description:
    //     "As the Electronics Co-Lead, you will oversee the design and development of PCBs and other electronic components, tackling challenging technical issues. This role is ideal for candidates experienced in electronics development and PCB design, with a passion for innovation.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },
    // {
    //   name: "Electronics Engineer",
    //   description:
    //     "As an Electronics Engineer, you will design, modify and assemble PCBs, troubleshoot electronic components, and collaborate with team members to integrate new technologies. This role is great for those experienced in soldering and circuit design.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },

    {
      name: "Electronics Engineer",
      description:
        "Design and modify custom PCBs and other electronics using Altium designer. Actively engage in troubleshooting hardware issues. Work collaboratively with other members to integrate new components on the robots. Solder, assemble, and rework PCBs",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
      descriptionLink: null,
      goTo: "/teams/electronics",
    },
    {
        name: "Head of Electronics Engineering",
        description:
          "As Electronics Head Engineer, you’ll design and troubleshoot PCBs, mentor subteam members, and oversee integration of electronics with mechanics and firmware.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
        descriptionLink: null,
      },
    
  ];

  const teamMembers = [
    // {
    //   image: julianHosseini,
    //   name: "Julian Hosseini",
    //   role: "Electronics Team Lead",
    //   linkedIn: "https://www.linkedin.com/in/zach-spencer",
    // },
    {
      image: zachSpencer,
      name: "Zach Spencer",
      role: "President/Electronics Team Lead",
      linkedIn: "https://www.linkedin.com/in/zachary-k-spencer/",
    },
    {
      image: hoomehrMangoli,
      name: "Hoomehr Mangoli",
      role: "Head of Electronics Engineering",
      linkedIn: "https://www.linkedin.com/in/hoomehr-mangoli-4a2187bb/",
    },
  ];

  return (
    <>
      <div className="pt-24 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
          Electronics Team
        </h2>
        <div className="flex flex-wrap gap-x-3 lg:gap-x-4 mt-1 lg:mt-0">
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Altium Designer
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            C++
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            C
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            LTSpice
          </div>
        </div>
        <h3 className="plus-jakarta-sans-heading text-2xl mt-4 mb-2">
          Open Roles
        </h3>
        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6">
          Sign up for our Electronics team! This is a great place if you're just
          starting out in electronics or already have a vast array of
          experience. If you're just starting out you'll have the opportunity to
          showcase your fundamental electronics skills as well as perform PCB
          designing. Join us in exploring the exciting realm of electronics and
          contribute to cutting-edge projects that redefine possibilities!
        </p>
        <div className="flex gap-10 mt-2 lg:mt-0 lg:gap-4 flex-col">
          {openRoles.length !== 0 ? (
            openRoles.map((role, index) => (
              <>
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-col lg:w-10/12">
                    <h2 className="plus-jakarta-sans-button text-xl">
                      {role.name}
                    </h2>
                    <p className="plus-jakarta-sans-body text-sm tracking-wide leading-6 text-black mt-1 mb-2">
                      {role.description}
                    </p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <a href={role.linkApply} target="_blank">
                      <button
                        id="buttonPrimary"
                        className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                      >
                        Apply Now
                        <FiArrowUpRight strokeWidth={3} />{" "}
                      </button>
                    </a>
                    {role.descriptionLink != null && (
                      <a href={role.descriptionLink} target="_blank">
                        <button
                          id="buttonSecondary"
                          className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                        >
                          Role Description
                          <FiFileText strokeWidth={3} />{" "}
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-10/12 line bg-black bg-opacity-100 lg:mt-4 lg:mb-4"></div>
              </>
            ))
          ) : (
            <h2 className="plus-jakarta-sans-body text-black text-lg leading-6">
              No open roles.
            </h2>
          )}
        </div>

        {teamMembers.length !== 0 ? (
          <div className="mt-4 mb-2 lg:flex-row lg:gap-6 flex-col lg:mt-10 flex gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="px-0 py-0 flex rounded-xl flex-col justify-center items-center w-52"
              >
                <div className="w-24 h-24 overflow-hidden rounded-full mb-4">
                  <img src={member.image}></img>
                </div>
                <h4 className="plus-jakarta-sans-heading text-md text-center mb-1 flex flex-row items-center gap-2">
                  {member.name}
                </h4>
                <p className="plus-jakarta-sans-body text-center text-xs w-2/3">
                  {member.role}
                </p>
                <p className="icons text-3xl text-center">
                  <a
                    href={member.linkedIn}
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
          <div></div>
        )}

        <h3 className="plus-jakarta-sans-heading text-2xl mt-6 mb-2">
          What Is Their Role
        </h3>
        <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6">
          The electronics team designs and tests all the electrical components
          on the robots, including creating custom PCBs from scratch. Our
          modular PCB design integrates multiple daughterboards, including the
          motor driver, kicker driver and dribbler motor driver boards onto a
          central motherboard using removable connectors.<br></br>
          <br></br>
          This team gives its members experience using Altium Designer, an
          industry standard PCB design tool, working through the entire design
          process from schematic capture to PCB routing. In addition, members of
          the electronics team work a lot on testing and troubleshooting all
          parts of the design to work on improvements for future robot
          generations.
        </p>
      </div>
      <Footer />
    </>
  );
};

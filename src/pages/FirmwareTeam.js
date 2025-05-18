import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { FiArrowLeft, FiArrowUpRight, FiFileText } from "react-icons/fi"
import firmwareDeveloperPDF from '../files/FirmwareDeveloper.pdf';
import mani from "../images/peopleimages/mani.webp";
import firmwareLeadPDF from "../files/FirmwareTeamLead.pdf";

export const FirmwareTeams = () => {
  const openRoles = [
    // {
    //   name: "Firmware Co-Lead",
    //   description:
    //     "As the Firmware Co-Lead, you will lead the firmware team and work on tasks such as robot integration, testing, and strategic codebase planning. This position is ideal for those with a deep understanding of embedded systems and strong leadership skills.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },
    // {
    //   name: "Head Firmware Engineer",
    //   description:
    //     "As the Head of Firmware, you will lead the firmware team, managing complex tasks such as robot integration, firmware-hardware testing, and maintaining a robust codebase. This role requires a deep understanding of embedded systems, leadership skills, and a commitment to fostering innovation within the firmware team.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },
    // {
    //   name: "Firmware Engineer",
    //   description:
    //     "As a Firmware Engineer, you will design and implement firmware for our robots, ensuring the smooth operation of components. If you’re passionate about embedded systems and proficient in C programming, this role is a great fit for you.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },
{
      name: "Firmware Developer",
      description:
        "Developing firmware for a range of microcontrollers including SAM, PIC, and Arduino platforms. Perform testing of firmware code on the robots and robotic components Involves contributing to code reviews, debugging, and optimizing firmware Integration testing across all robotic subsystems with other teams.",
      linkApply:
        "https://forms.gle/6ewChzzDcKwAuTS59",
      descriptionLink: null,
      goTo: "/teams/firmware",
    },
    
  ];

  const teamMembers = [
    {
      image: mani,
      name: "Mani Samet",
      role: "Firmware Team Leader",
      linkedIn: "https://www.linkedin.com/in/mani-samet-6b7288260/",
    },
  ];

  return (
    <>
      <div className="pt-24 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
          Firmware Team
        </h2>
        <div className="flex flex-wrap gap-x-3 lg:gap-x-4 mt-1 lg:mt-0">
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Boost
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            C++
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Docker
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Eigen
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Git
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Google Protobuffers
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Python
          </div>
          <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
            Qt5
          </div>
        </div>

        <h3 className="plus-jakarta-sans-heading text-2xl mt-4 mb-2">
          Open Roles
        </h3>
        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6">
          Apply for a position on our Firmware Team! This team focuses on
          implementing the firmware for the electronic circuit boards,
          performing testing of firmware code on the robots and robotic
          components and writing high quality documentation for your work
        </p>
        <div className="flex gap-10 mt-10 lg:mt-0 lg:gap-4 flex-col">
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
                <div className="lg:w-10/12 line bg-black bg-opacity-100 lg:mt-4 lg:mb-4"></div>
              </>
            ))
          ) : (
            <h2 className="plus-jakarta-sans-body text-black text-lg lg:leading-6">
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
        <p className="plus-jakarta-sans-body text-md w-11/12 leading-6">
          The firmware team specializes in crafting the digital heartbeat of our
          robots. They focus on developing robust firmware and communication
          interfaces, ensuring seamless interaction between our main computer
          and individual robots.<br></br>
          <br></br>
          We are looking for motivated students who are interested in applying
          their knowledge across and beyond the curriculum into practice. We are
          currently working on developing our robotic command and control
          systems, our data systems and improving our GUI among other tasks. In
          our team we hope you not only gain technical experience but also
          experience in collaborating with your peers through pair programming,
          code reviews, documentation and meetings.
        </p>

        {/* <p className="plus-jakarta-sans-body text-lg">There are currently no open roles for the electronics team.</p> */}
      </div>
      <Footer />
    </>
  );
};

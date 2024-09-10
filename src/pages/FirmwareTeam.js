import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { FiArrowLeft, FiArrowUpRight, FiFileText } from "react-icons/fi"
import firmwareDeveloperPDF from '../files/FirmwareDeveloper.pdf';
import mani from "../images/peopleimages/mani.webp";
import firmwareLeadPDF from "../files/FirmwareTeamLead.pdf";

export const FirmwareTeams = () => {
  const openRoles = [
    {
      name: "Firmware Developer",
      description:
        "As a Firmware Developer on the firmware team, you will be consistently working on the firmware of the circuit boards that power our robots, developing and optimising the code that enables our robots to compete at their best. In other words, firmware takes the hardware and allows our circuitry to interact on the conditions we desire. The firmware coding will be done in the C language and will be primarily focused on changing the code of the actual robot, to allow the entire robot to function to its desired capabilities. For this role, we are seeking individuals who are passionate and committed to firmware programming, and problem-solving.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
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

        <h3 className="plus-jakarta-sans-heading text-2xl mt-10 mb-2">
          Open Roles
        </h3>
        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6">
          Apply for a position on our Firmware Team! This team focuses on
          implementing the firmware for the electronic circuit boards,
          performing testing of firmware code on the robots and robotic
          components and writing high quality documentation for your work
        </p>
        {/* <p className="plus-jakarta-sans-body text-lg">There are currently no open roles for the electronics team.</p> */}
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
      </div>
      <Footer />
    </>
  );
};
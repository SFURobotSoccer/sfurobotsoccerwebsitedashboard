import { Footer } from "../components/Footer";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

export const Join = () => {
  const openRoles = [
    {
      name: "Director of Communications",
      description:
        "Develop semester update newsletters to inform major sponsors about the impact of their sponsorship. Create and send follow-up letters to sponsors approximately 3 months after receiving a sponsorship, detailing how funds were spent. Assist in managing internal communications within the club. Aid in event communications to ensure clear and consistent messaging.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
    {
      name: "Director of Graphic Design",
      description:
        "Creating promotional material that aligns with SFU Robotic Soccer’s goals and values Ability to work with a team to create high quality content in time sensitive high pressure environments Support in designing visual content for various projects Attending events and key design team meetings to capture media content to facilitate the creation of meaningful promotional content The Director of Graphic Design is expected to commit 6-8 hours each week The Director of Graphic Design must attend weekly meetings with the team, and attend all organisation-wide meetings Experience with Visual design software (Figma, Canva, Photoshop, After effect, etc.) Proficiency in using camera equipment Prepare and facilitate pitch meetings to corporate prospects and industry professionals to secure sponsorships",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
    {
      name: "Electonics Team Member",
      description:
        "As a member of our Electronics Team, your role will consist of designing the electronic components of our robotic system. Your primary responsibilities will revolve around specific changes, updates, and solutions to problems on the current board designs. This will all be done in Altium designer, changing the PCB layout to make up for new components to be added or for entirely additional circuits to be added to solve certain issues.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
    {
      name: "Firmware Developer",
      description:
        "As a Firmware Developer on the firmware team, you will be consistently working on the firmware of the circuit boards that power our robots, developing and optimising the code that enables our robots to compete at their best. In other words, firmware takes the hardware and allows our circuitry to interact on the conditions we desire. The firmware coding will be done in the C language and will be primarily focused on changing the code of the actual robot, to allow the entire robot to function to its desired capabilities. For this role, we are seeking individuals who are passionate and committed to firmware programming, and problem-solving.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
    {
      name: "Mechanics Team Member",
      description:
        "As a Mechanics Team Member on the mechanics team, you will be contributing to the various mechanical systems of our fleet of autonomous soccer-playing robots. These mechanical elements include but are not limited to the chassis, wheels, kicker, PCB mounts, and motors. The main software used for computer modelling is Solidworks. Additionally, you will have the opportunity to help contribute with the manufacturing of the developed mechanical elements.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
    {
      name: "Software Developer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform",
      descriptionLink: null,
    },
  ];

  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-3">
          Join The Team
        </h2>

        <h3 className="plus-jakarta-sans-heading text-2xl mb-0">Open Roles</h3>
        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6"></p>
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
              There are currently not any open positions at SFU RS, however keep
              up to date with our social media, and join our{" "}
              <a
                className="text-red-700"
                href="https://discord.com/invite/CK3nws9YPY"
                target="_blank"
              >
                discord
              </a>{" "}
              to find out when they next openings get released!
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

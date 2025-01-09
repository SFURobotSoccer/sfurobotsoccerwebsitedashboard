import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const OpenRoles = () => {
  const navigate = useNavigate();
  const openRoles = [
    {
      name: "VP of Administration",
      description:
        "Help track and manage all club expenses, ensuring transparency and accuracy in financial records Help ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds Data entry of club finances into master sheet.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "VP of Public Relations",
      description:
        "Present financial plans and proposals to potential sponsors to secure funding for club initiatives. Track and manage all club expenses, ensuring transparency and accuracy in financial records. Ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds. Develop and oversee the club's budget, adjusting for changes in revenue and expenses throughout the year.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "VP of Corporate Relations",
      description:
        "Present financial plans and proposals to potential sponsors to secure funding for club initiatives. Track and manage all club expenses, ensuring transparency and accuracy in financial records. Ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds. Develop and oversee the club's budget, adjusting for changes in revenue and expenses throughout the year.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Finance Coordinator",
      description:
        "Develop semester update newsletters to inform major sponsors about the impact of their sponsorship. Create and send follow-up letters to sponsors approximately 3 months after receiving a sponsorship, detailing how funds were spent. Assist in managing internal communications within the club. Aid in event communications to ensure clear and consistent messaging.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Outreach Director",
      description:
        "Responsible for building and maintaining partnerships with corporate sponsors and industry stakeholders. This role involves securing sponsorships, managing relationships with external partners, and exploring collaboration opportunities.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Mechanics Co-Lead",
      description:
        "Creating promotional material that aligns with SFU Robotic Soccer’s goals and values Ability to work with a team to create high quality content in time sensitive high pressure environments Support in designing visual content for various projects Attending events and key design team meetings to capture media content to facilitate the creation of meaningful promotional content The Director of Graphic Design is expected to commit 6-8 hours each week The Director of Graphic Design must attend weekly meetings with the team, and attend all organisation-wide meetings Experience with Visual design software (Figma, Canva, Photoshop, After effect, etc.) Proficiency in using camera equipment Prepare and facilitate pitch meetings to corporate prospects and industry professionals to secure sponsorships",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/mechanics",
    },
    {
      name: "Electonics Co-Lead",
      description:
        "As a member of our Electronics Team, your role will consist of designing the electronic components of our robotic system. Your primary responsibilities will revolve around specific changes, updates, and solutions to problems on the current board designs. This will all be done in Altium designer, changing the PCB layout to make up for new components to be added or for entirely additional circuits to be added to solve certain issues.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/electronics",
    },
    {
      name: "Firmware Co-Lead",
      description:
        "As a Firmware Developer on the firmware team, you will be consistently working on the firmware of the circuit boards that power our robots, developing and optimising the code that enables our robots to compete at their best. In other words, firmware takes the hardware and allows our circuitry to interact on the conditions we desire. The firmware coding will be done in the C language and will be primarily focused on changing the code of the actual robot, to allow the entire robot to function to its desired capabilities. For this role, we are seeking individuals who are passionate and committed to firmware programming, and problem-solving.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/firmware",
    },
    {
      name: "Head Mechanics Engineer",
      description:
        "As a Mechanics Team Member on the mechanics team, you will be contributing to the various mechanical systems of our fleet of autonomous soccer-playing robots. These mechanical elements include but are not limited to the chassis, wheels, kicker, PCB mounts, and motors. The main software used for computer modelling is Solidworks. Additionally, you will have the opportunity to help contribute with the manufacturing of the developed mechanical elements.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/mechanics",
    },
    {
      name: "Head Firmware Engineer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/firmware",
    },
    {
      name: "Mechanics Engineer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/mechanics",
    },
    {
      name: "Electronics Engineer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/electronics",
    },
    {
      name: "Firmware Engineer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/firmware",
    },
    {
      name: "Software Developer",
      description:
        "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/teams/software",
    },
  ];

  return (
    <div className="w-11/12 ml-auto mr-auto lg:w-full mt-10 lg:mt-32 flex items-center flex-col lg:flex-row justify-between">
      <div className="lg:w-full flex flex-col">
        <h2 className="plus-jakarta-sans-heading text-xl mb-2">Open Roles</h2>
        <h3 className="plus-jakarta-sans-body text-md text-black text-opacity-60 mb-3">
          Are you interested in robotics and soccer? Do you want to be part of a
          winning team? Then come and join us at the Simon Fraser University
          Robot Soccer Club! We are always looking for new members to join our
          software, electronics, firmware, and mechanics teams. If you are
          interested in joining one of these teams then apply now!
        </h3>
        <div className="flex gap-10 mt-2 lg:mt-10 lg:mt-0 lg:gap-10 flex-col">
          <div className="flex flex-wrap gap-x-4 gap-y-4">
            {openRoles.length !== 0 ? (
              openRoles.map((role, index) => (
                <>
                  <button
                    key={index}
                    onClick={() => navigate(`${role.goTo}`)}
                    className="flex bg-black bg-opacity-5 text-start lg:hover:cursor-pointer lg:hover:bg-red-100 transition duration-300 ease-in-out px-8 py-6 rounded-lg flex-col gap-4"
                  >
                    <div className="flex flex-col lg:w-10/12">
                      <h2 className="plus-jakarta-sans-button text-xl">
                        {role.name}
                      </h2>
                    </div>
                    {/* <button
                      id="buttonPrimary"
                      onClick={() => window.open(role.linkApply, "_blank")}
                      className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                    >
                      Apply Now
                    </button> */}
                  </button>
                </>
              ))
            ) : (
              <h2 className="plus-jakarta-sans-body text-black text-lg leading-6">
                There are currently no open roles at SFU RS.
              </h2>
            )}
          </div>
          {/* {openRoles.length !== 0 && (
            <div className="flex flex-row gap-2 -mt-2">
              <a
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLScQbtJXuMKvOpBZ-aJ8k2db6INAc6iK9aw7l8RwxHJWlTonEQ/viewform"
                }
                target="_blank"
              >
                <button
                  id="buttonPrimary"
                  className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                >
                  Apply Now
                </button>
              </a>
              <a href={"/join"}>
                <button
                  id="buttonSecondary"
                  className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                >
                  More Info
                  <FiArrowUpRight strokeWidth={3} />{" "}
                </button>
              </a>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

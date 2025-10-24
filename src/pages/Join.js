import { useState } from "react";
import { Footer } from "../components/Footer";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

export const Join = () => {
  const [techRoles, setTechRoles] = useState(true);

  const openRoles = [
    // {
    //   name: "VP of Public Relations",
    //   description:
    //     "As the VP of Public Relations, you will lead the creation of engaging promotional materials and visual content that align with the team’s goals. The ability to work with a team to create high quality content in time sensitive environments Support in designing visual content for various projects. Attend events and prepare for and lead pitch meetings with corporate prospects and industry professionals to secure sponsorships.",
    //   linkApply:
    //     "https://forms.gle/DVwhQ7duBs25SGFs9",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Director of Graphic Design",
    //   description:
    //     "Design engaging graphics for digital and print media (e.g., social posts, posters, newsletters). Maintain brand consistency across all designs. Design external materials like sponsorship packages and slide decks to engage stakeholders. Assist in curating visual content libraries (photos, icons, textures, etc.) for team-wide use",
    //   linkApply:
    //     "https://forms.gle/DVwhQ7duBs25SGFs9",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    //Fall 25
    // {
    //   name: "VP of Internal Relations",
    //   description:
    //     "",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Outreach Co-Lead",
    //   description:
    //     "",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Finance Coordinator",
    //   description:
    //     "",
    //    //"As the Finance Coordinator, you will manage the team’s budget, track expenses, and ensure compliance with funding guidelines. This role is suited for individuals with a strong grasp of financial principles and Excel skills, who are ready to contribute to the team’s financial transparency and success.",
    //   linkApply:
    //     "",
    //   //"https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Corporate Relations Coordinator",
    //   description:
    //    "",
    //  //"As the Outreach Coordinator, you will inspire the next generation of engineers by organizing robotics workshops and events at local high schools. This role is perfect for individuals passionate about education and who excel in making complex concepts accessible and exciting.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Outreach Coordinator",
    //   description:
    //     "",
    //     //"As the Outreach Coordinator, you will inspire the next generation of engineers by organizing robotics workshops and events at local high schools. This role is perfect for individuals passionate about education and who excel in making complex concepts accessible and exciting.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Marketing Coordinator",
    //   description:
    //     "",
    //    linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Learning Groups Coordinator",
    //   description:
    //     "",
    //    linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
  ];

  const openRolesTech = [
    
    // Fall 25
    //       {
    //     name: "Mechanics Co-Lead",
    //     description:
    //       "As the Mechanics Co-Lead, you will guide the team in designing and developing the physical components of our robots, including chassis and drive systems. This leadership role is suited for individuals with a strong background i",
    //     linkApply:
    //       "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //     descriptionLink: null,
    //   },
    //   {
    //     name: "Head of Mechanical Engineering",
    //     description:
    //       "As the Head of Mechanical Engineering, you will lead the team in designing and implementing the physical components of our robots, including the drive train, chassis, and kicker. You will provide technical guidance, delegate tasks effectively, and ensure the integration of mechanical designs with other subsystems. This leadership role is ideal for individuals with strong CAD skills, mechanical design expertise, and excellent organizational abilities.",
    //     linkApply:
    //       "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //     descriptionLink: null,
    //   },
    // {
    //     name: "Head of Electronics Engineering",
    //     description:
    //       "As Electronics Head Engineer, you’ll design and troubleshoot PCBs, mentor subteam members, and oversee integration of electronics with mechanics and firmware.",
    //     linkApply:
    //       "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //     descriptionLink: null,
    //   },
    // {
    //   name: "Firmware Developer",
    //   description:
    //     "Developing firmware for a range of microcontrollers including SAM, PIC, and Arduino platforms. Perform testing of firmware code on the robots and robotic components Involves contributing to code reviews, debugging, and optimizing firmware Integration testing across all robotic subsystems with other teams.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //   descriptionLink: null,
    //   goTo: "/teams/firmware",
    // },
    // {
    //   name: "Mechanics Engineer",
    //   description:
    //     "Help design and prototype mechanical and electromechanical systems on our fleet of robots. Fabrication and assembly of parts including drive train, chassis, and kicker Research and evaluate materials essential for the projects, ensuring consistent improvement of mechanical quality",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //   descriptionLink: null,
    //   goTo: "/teams/mechanics",
    // },
    // {
    //   name: "Electronics Engineer",
    //   description:
    //     "Design and modify custom PCBs and other electronics using Altium designer. Actively engage in troubleshooting hardware issues. Work collaboratively with other members to integrate new components on the robots. Solder, assemble, and rework PCBs",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //   descriptionLink: null,
    //   goTo: "/teams/electronics",
    // },
    // {
    //   name: "Software Developer",
    //   description:
    //     "Build and test software components in C++, Python, QML, and XML. Contribute to multiple sub-projects and maintain. detailed documentation in a team setting. Write tests with Boost.UT and create documentation",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
    //   descriptionLink: null,
    //   goTo: "/teams/software",
    // },
    // {
    //   name: "Mechanics Co-Lead",
    //   description:
    //     "Creating promotional material that aligns with SFU Robotic Soccer’s goals and values Ability to work with a team to create high quality content in time sensitive high pressure environments Support in designing visual content for various projects Attending events and key design team meetings to capture media content to facilitate the creation of meaningful promotional content The Director of Graphic Design is expected to commit 6-8 hours each week The Director of Graphic Design must attend weekly meetings with the team, and attend all organisation-wide meetings Experience with Visual design software (Figma, Canva, Photoshop, After effect, etc.) Proficiency in using camera equipment Prepare and facilitate pitch meetings to corporate prospects and industry professionals to secure sponsorships",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/mechanics",
    // },
    // {
    //   name: "Electonics Co-Lead",
    //   description:
    //     "As a member of our Electronics Team, your role will consist of designing the electronic components of our robotic system. Your primary responsibilities will revolve around specific changes, updates, and solutions to problems on the current board designs. This will all be done in Altium designer, changing the PCB layout to make up for new components to be added or for entirely additional circuits to be added to solve certain issues.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/electronics",
    // },
    // {
    //   name: "Firmware Co-Lead",
    //   description:
    //     "As a Firmware Developer on the firmware team, you will be consistently working on the firmware of the circuit boards that power our robots, developing and optimising the code that enables our robots to compete at their best. In other words, firmware takes the hardware and allows our circuitry to interact on the conditions we desire. The firmware coding will be done in the C language and will be primarily focused on changing the code of the actual robot, to allow the entire robot to function to its desired capabilities. For this role, we are seeking individuals who are passionate and committed to firmware programming, and problem-solving.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/firmware",
    // },
    // {
    //   name: "Head Mechanics Engineer",
    //   description:
    //     "As a Mechanics Team Member on the mechanics team, you will be contributing to the various mechanical systems of our fleet of autonomous soccer-playing robots. These mechanical elements include but are not limited to the chassis, wheels, kicker, PCB mounts, and motors. The main software used for computer modelling is Solidworks. Additionally, you will have the opportunity to help contribute with the manufacturing of the developed mechanical elements.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/mechanics",
    // },
    // {
    //   name: "Head Firmware Engineer",
    //   description:
    //     "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/firmware",
    // },
    // {
    //   name: "Mechanics Engineer",
    //   description:
    //     "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/mechanics",
    // },
    // {
    //   name: "Electronics Engineer",
    //   description:
    //     "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/electronics",
    // },
    // {
    //   name: "Firmware Engineer",
    //   description:
    //     "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/firmware",
    // },
    // {
    //   name: "Software Developer",
    //   description:
    //     "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/teams/software",
    // },
  ];

  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-3">
          Join The Team
        </h2>

        <h3 className="plus-jakarta-sans-heading text-2xl mb-0">Open Roles</h3>

        {/*
        <a 
          href="/SFURSFallHiringPackage2025-2026.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          View Full Hiring Package
        </a>
   */}

        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6"></p>
        <div className="flex flex-row items-center gap-4 mb-5">
          <button
            onClick={() => setTechRoles(false)}
            id={`${!techRoles ? "buttonPrimary" : "buttonSecondary"}`}
            className="flex items-center gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
          >
            Buiness Roles
          </button>
          <button
            onClick={() => setTechRoles(true)}
            id={`${techRoles ? "buttonPrimary" : "buttonSecondary"}`}
            className="flex items-center gap-2 plus-jakarta-sans-button text-sm px-4 py-2 tracking-wide rounded-md"
          >
            Technical Roles
          </button>
        </div>
        {/* <p className="plus-jakarta-sans-body text-lg">There are currently no open roles for the electronics team.</p> */}
        {techRoles ? (
          <div className="flex gap-10 mt-10 lg:mt-0 lg:gap-4 flex-col">
            {openRolesTech.length !== 0 ? (
              openRolesTech.map((role, index) => (
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
                There are currently no positions available at the moment. Follow
                us @sfurobotsoccer on Instagram and join our{" "}
                <a
                  className="text-red-700"
                  href="https://discord.com/invite/CK3nws9YPY"
                  target="_blank"
                >
                  discord
                </a>{" "}
                to find out when the next openings get released!
              </h2>
            )}
          </div>
        ) : (
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
                There are currently no positions available at the moment. Follow
                us @sfurobotsoccer on Instagram and join our{" "}
                <a
                  className="text-red-700"
                  href="https://discord.com/invite/CK3nws9YPY"
                  target="_blank"
                >
                  discord
                </a>{" "}
                to find out when the next openings get released!
              </h2>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

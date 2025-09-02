// import { Link } from "react-router-dom";
// import { Footer } from "../components/Footer";
// import {
//   FiArrowLeft,
//   FiArrowUpRight,
//   FiCode,
//   FiFileText,
//   FiGitPullRequest,
//   FiSliders,
//   FiTerminal,
// } from "react-icons/fi";
// import firmwareDeveloperPDF from "../files/FirmwareDeveloper.pdf";
// import mani from "../images/peopleimages/mani.webp";
// import firmwareLeadPDF from "../files/FirmwareTeamLead.pdf";

// export const FirstYearKickOffProgram = () => {
//   const openRoles = [
//     {
//       name: "Firmware Co-Lead",
//       description:
//         "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
//       linkApply:
//         "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
//       descriptionLink: null,
//     },
//     {
//       name: "Head Firmware Engineer",
//       description:
//         "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
//       linkApply:
//         "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
//       descriptionLink: null,
//     },
//     {
//       name: "Firmware Engineer",
//       description:
//         "As a Software Developer on the software team, you will be contributing to enhance our software through designing & implementing new features, mainly including AI. The software team, in charge of making the brain for our robots, develop and utilise AI to create match-winning tactics. Additionally, they take advantage of graphical simulation to virtually test our fleet of robots. The collaborative environment within the software team ensures that our software evolves seamlessly, setting new standards in the field.",
//       linkApply:
//         "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
//       descriptionLink: null,
//     },
//   ];

//   const teamMembers = [
//     {
//       image: mani,
//       name: "Mani Samet",
//       role: "Firmware Team Leader",
//       linkedIn: "https://www.linkedin.com/in/mani-samet-6b7288260/",
//     },
//   ];

//   return (
//     <>
//       <div className="pt-24 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-6 lg:px-20">
//         <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
//           Kick Off Program
//         </h2>
//         <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6 mt-1">
//           The SFU Robot Soccer Kickoff Program offers first-year students a
//           chance to join one of our four subteams—Mechanics, Electronics,
//           Firmware, or Software. Only one participant per team will be selected
//           to work alongside experienced members, gaining hands-on experience
//           while contributing to cutting-edge robotics projects. This program
//           provides mentorship, builds foundational skills, and creates a pathway
//           for future involvement in the team.
//         </p>
//         <h3 className="plus-jakarta-sans-heading text-2xl mt-6 mb-2 flex flex-row items-center gap-2">
//           <FiGitPullRequest size={14} strokeWidth={3} /> Electonics Team Role
//         </h3>
//         <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6">
//           The electronics team designs and tests all the electrical components
//           on the robots, including creating custom PCBs from scratch. Our
//           modular PCB design integrates multiple daughterboards, including the
//           motor driver, kicker driver and dribbler motor driver boards onto a
//           central motherboard using removable connectors.
//         </p>
//         <h3 className="plus-jakarta-sans-heading text-2xl mt-6 mb-2 flex flex-row items-center gap-2">
//           <FiTerminal size={14} strokeWidth={3} />
//           Firmware Team Role
//         </h3>
//         <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6">
//           The firmware team specializes in crafting the digital heartbeat of our
//           robots. They focus on developing robust firmware and communication
//           interfaces, ensuring seamless interaction between our main computer
//           and individual robots.
//         </p>
//         <h3 className="plus-jakarta-sans-heading text-2xl mt-6 mb-2 flex flex-row items-center gap-2">
//           <FiSliders size={14} strokeWidth={3} /> Mechanics Team Role
//         </h3>
//         <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6">
//           The Mechanics team gives shape and character to our team of robots and
//           is a great way to get started in the club. Members are introduced to
//           the basics of CAD and work on designing components such as
//           base-plates, motor mounts and kicker systems, usually under the
//           supervision of more senior members.
//         </p>
//         <h3 className="plus-jakarta-sans-heading text-2xl mt-6 mb-2 flex flex-row items-center gap-2">
//           <FiCode size={14} strokeWidth={3} /> Software Team Role
//         </h3>
//         <p className="plus-jakarta-sans-body text-sm w-11/12 leading-6">
//           At the software team our members collaborate together to develop the
//           core and support elements of our software system. As speed gives us a
//           competitive advantage we use a C++ tech stack to develop our AI and
//           robotic control algorithms as well as our interface.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

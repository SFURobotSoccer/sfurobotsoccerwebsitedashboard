import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const OpenRoles = () => {
  const navigate = useNavigate();
  const openRoles = [
    // {
    //   name: "VP of Administration",
    //   description:
    //     "Help track and manage all club expenses, ensuring transparency and accuracy in financial records Help ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds Data entry of club finances into master sheet.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "VP of Public Relations",
    //   description:
    //     "Present financial plans and proposals to potential sponsors to secure funding for club initiatives. Track and manage all club expenses, ensuring transparency and accuracy in financial records. Ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds. Develop and oversee the club's budget, adjusting for changes in revenue and expenses throughout the year.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
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
    // {
    //   name: "Finance Coordinator",
    //   description:
    //     "Develop semester update newsletters to inform major sponsors about the impact of their sponsorship. Create and send follow-up letters to sponsors approximately 3 months after receiving a sponsorship, detailing how funds were spent. Assist in managing internal communications within the club. Aid in event communications to ensure clear and consistent messaging.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Outreach Director",
    //   description:
    //     "Responsible for building and maintaining partnerships with corporate sponsors and industry stakeholders. This role involves securing sponsorships, managing relationships with external partners, and exploring collaboration opportunities.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "VP of Finance",
    //   description:
    //     "As the VP of Finance, you will be responsible for managing the club's finances, including budgeting, expense tracking, and financial reporting. You will also be involved in fundraising efforts and sponsorship negotiations.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
    // {
    //   name: "Business Team Lead",
    //   description:
    //     "As the Business Team Lead, you will be responsible for managing the club's finances, including budgeting, expense tracking, and financial reporting. You will also be involved in fundraising efforts and sponsorship negotiations.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    //   goTo: "/join",
    // },
      {
      name: "VP of Internal Relations",
      description:
        "",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Outreach Co-Lead",
      description:
        "",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Finance Coordinator",
      description:
        "As the Finance Coordinator, you will manage the team’s budget, track expenses, and ensure compliance with funding guidelines. This role is suited for individuals with a strong grasp of financial principles and Excel skills, who are ready to contribute to the team’s financial transparency and success.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Corporate Relations Coordinator",
      description:
        "As the Outreach Coordinator, you will inspire the next generation of engineers by organizing robotics workshops and events at local high schools. This role is perfect for individuals passionate about education and who excel in making complex concepts accessible and exciting.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Outreach Coordinator",
      description:
        "As the Outreach Coordinator, you will inspire the next generation of engineers by organizing robotics workshops and events at local high schools. This role is perfect for individuals passionate about education and who excel in making complex concepts accessible and exciting.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Marketing Coordinator",
      description:
        "",
       linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Learning Groups Coordinator",
      description:
        "",
       linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLScTyieZBFZa2BNwD5Ab6T-dOWGFJDDai-t1RPMpnSvkPVGY-w/viewform?usp=preview",
      descriptionLink: null,
      goTo: "/join",
    },
     {
        name: "Mechanics Co-Lead",
        description:
          "As the Mechanics Co-Lead, you will guide the team in designing and developing the physical components of our robots, including chassis and drive systems. This leadership role is suited for individuals with a strong background in mechanical design, CAD software, and project management.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
        descriptionLink: null,
        goTo: "/teams/mechanics",
      },
      {
        name: "Head of Mechanical Engineering",
        description:
          "As the Head of Mechanical Engineering, you will lead the team in designing and implementing the physical components of our robots, including the drive train, chassis, and kicker. You will provide technical guidance, delegate tasks effectively, and ensure the integration of mechanical designs with other subsystems. This leadership role is ideal for individuals with strong CAD skills, mechanical design expertise, and excellent organizational abilities.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
        descriptionLink: null,
        goTo: "/teams/mechanics",
      },
    {
      name: "Firmware Developer",
      description:
        "Developing firmware for a range of microcontrollers including SAM, PIC, and Arduino platforms. Perform testing of firmware code on the robots and robotic components Involves contributing to code reviews, debugging, and optimizing firmware Integration testing across all robotic subsystems with other teams.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
      descriptionLink: null,
      goTo: "/teams/firmware",
    },
    {
      name: "Mechanics Engineer",
      description:
        "Help design and prototype mechanical and electromechanical systems on our fleet of robots. Fabrication and assembly of parts including drive train, chassis, and kicker Research and evaluate materials essential for the projects, ensuring consistent improvement of mechanical quality",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
      descriptionLink: null,
      goTo: "/teams/mechanics",
    },
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
      name: "Software Developer",
      description:
        "Build and test software components in C++, Python, QML, and XML. Contribute to multiple sub-projects and maintain. detailed documentation in a team setting. Write tests with Boost.UT and create documentation",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc-b423mbwLRkFVAT65FnJ12MS8A6forlrx4sAF_gnLMmj4pw/viewform?usp=sharing&ouid=103666114779303861294",
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

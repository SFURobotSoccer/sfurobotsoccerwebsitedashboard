import { Footer } from "../components/Footer";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

export const Join = () => {
  const openRoles = [
    {
      name: "VP of Administration",
      description:
        "As the VP of Administration, you will ensure the smooth operation of the team by maintaining organized records, managing club infrastructure such as Discord and Google Drive, and keeping track of meeting minutes. This position is perfect for someone who is detail-oriented, highly organized, and enjoys ensuring that all administrative aspects of the team run seamlessly.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "VP of Public Relations",
      description:
        "As the VP of Public Relations, you will lead the creation of engaging promotional materials and visual content that align with the team’s goals. From capturing event highlights to designing impactful media, you will ensure the team’s message reaches the right audience. A creative flair and experience with tools like Canva or Photoshop are valuable for this position. ",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "VP of Corporate Relations",
      description:
        "As the VP of Corporate Relations, you will drive the team’s sponsorship efforts by securing corporate funding, maintaining relationships with sponsors, and preparing impactful presentations to showcase our club’s commitment to excellence and social responsibility. This role is perfect for individuals with strong communication skills, organizational expertise, and a passion for connecting with industry professionals.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Finance Coordinator",
      description:
        "As the Finance Coordinator, you will manage the team’s budget, track expenses, and ensure compliance with funding guidelines. This role is suited for individuals with a strong grasp of financial principles and Excel skills, who are ready to contribute to the team’s financial transparency and success.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
    },
    {
      name: "Outreach Director",
      description:
        "As the Outreach Director, you will inspire the next generation of engineers by organizing robotics workshops and events at local high schools. This role is perfect for individuals passionate about education and who excel in making complex concepts accessible and exciting.",
      linkApply:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_hUEFEPLV6nEk73rL39YmyGlN0TewqiafD4cFEJqMchdgJg/viewform",
      descriptionLink: null,
      goTo: "/join",
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

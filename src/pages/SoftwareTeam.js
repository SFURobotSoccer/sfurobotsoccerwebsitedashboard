import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { FiArrowUpRight, FiFileText } from "react-icons/fi"
import sukhrajPureWal from "../images/sukhrajPurewal.webp";
import jonathanUng from "../images/jonathanUng.webp";
import defaultPhoto from "../images/peopleimages/default_profile.webp";

export const SoftwareTeams = () => {
  const teamMembers = [

    //Fall 25
    // {
    //   image: sukhrajPureWal,
    //   name: "Sukhraj Purewal",
    //   role: "Software Team Co-Leader",
    //   linkedIn: "https://www.linkedin.com/in/sukhraj-purewal-78b6b1222/",
    // },
    // {
    //   image: jonathanUng,
    //   name: "Jonathan Keith Ung",
    //   role: "Software Team Co-Leader",
    //   linkedIn: "https://www.linkedin.com/in/jonathan-ung-1193a2238/",
    // },
    // {
    //   image: defaultPhoto,
    //   name: "Jimmy Zhou",
    //   role: "Head of Software Engineering",
    //   linkedIn: "https://www.linkedin.com/in/jimmy-z-3849b8224/",
    // },
    // {
    //   image: jonathanUng,
    //   name: "Jonathan Keith Ung",
    //   role: "Software Team Co-Leader",
    //   linkedIn: "https://www.linkedin.com/in/jonathan-ung-1193a2238/",
    // },
  ];

  const openRoles = [
    // {
    //   name: "Software Developer",
    //   description:
    //     "As a Software Developer, you will contribute to the team by implementing AI and networking components in C++. This role involves working in a collaborative environment, creating documentation, and applying your problem-solving skills to enhance our software. Proficiency in C++ and Python is essential.",
    //   linkApply:
    //     "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
    //   descriptionLink: null,
    // },
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
    <>
      <div className="pt-24 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
          Software Team
        </h2>
        <div className="flex flex-wrap gap-x-2 lg:gap-x-4 mt-1 lg:mt-0">
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
        <p className="plus-jakarta-sans-body text-black w-11/12 text-md lg:mb-0 text-opacity-40 leading-6">
          Apply for a position on our Software Team! This dynamic team focuses
          on crafting the brain of our robots, specialising in the development
          of artificial intelligence. The role requires not only a basic
          understanding of C++, Git fundamentals, and the ability to develop in
          Linux (Ubuntu) but also emphasises innovation and collaboration. Apply
          to have the opportunity to contribute to the seamless advancement of
          our software development.
        </p>
        <div className="flex gap-10 mt-2 lg:mt-4 lg:gap-4 flex-col">
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

          {teamMembers.length !== 0 ? (
            <div className="mt-4 mb-2 lg:flex-row flex-row lg:mt-10 flex lg:gap-6 ">
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
            At the software team our members collaborate together to develop the
            core and support elements of our software system. As speed gives us
            a competitive advantage we use a C++ tech stack to develop our AI
            and robotic control algorithms as well as our interface.<br></br>
            <br></br>
            We are looking for motivated students who are interested in applying
            their knowledge across and beyond the curriculum into practice. We
            are currently working on developing our robotic command and control
            systems, our data systems and improving our GUI among other tasks.
            In our team we hope you not only gain technical experience but also
            experience in collaborating with your peers through pair
            programming, code reviews, documentation and meetings.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

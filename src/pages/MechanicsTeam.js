import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { FiArrowLeft, FiArrowUpRight, FiFileText } from "react-icons/fi"
import firmwareDeveloperPDF from '../files/FirmwareDeveloper.pdf';
import firmwareLeadPDF from '../files/FirmwareTeamLead.pdf';
import zacharyGoodman from '../images/peopleimages/zachary.webp';

export const MechanicsTeam = () => {

    const openRoles = [
      {
        name: "Mechanics Co-Lead",
        description:
          "As the Mechanics Co-Lead, you will guide the team in designing and developing the physical components of our robots, including chassis and drive systems. This leadership role is suited for individuals with a strong background in mechanical design, CAD software, and project management.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
        descriptionLink: null,
      },
      {
        name: "Head Mechanics Engineer",
        description:
          "As the Head of Mechanics, you will lead the team in designing and implementing the physical components of our robots, including the drive train, chassis, and kicker. You will provide technical guidance, delegate tasks effectively, and ensure the integration of mechanical designs with other subsystems. This leadership role is ideal for individuals with strong CAD skills, mechanical design expertise, and excellent organizational abilities.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
        descriptionLink: null,
      },
      {
        name: "Mechanics Engineer",
        description:
          "As a Mechanics Engineer, you will contribute to designing and prototyping mechanical systems for the robots. This hands-on role is perfect for individuals skilled in CAD programs and manufacturing methods like 3D printing and CNC.",
        linkApply:
          "https://docs.google.com/forms/d/e/1FAIpQLSczbwnwjTU9ooCiO29Z1DhqNlMD20jn-GUWWZ2dpHXqnIvl5g/viewform",
        descriptionLink: null,
      },
    ];

    const teamMembers = [
      {
        image: zacharyGoodman,
        name: "Zachary Goodman",
        role: "Mechanics Team Lead",
        linkedIn: "https://www.linkedin.com/in/zach-spencer",
      },
    ];

    return (
      <>
        <div className="pt-24 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-6 lg:px-20">
          <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
            Mechanics Team
          </h2>
          <div className="flex flex-wrap gap-x-3 lg:gap-x-4 mt-1 lg:mt-0">
            <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
              3D Printing
            </div>
            <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
              CNC Milling
            </div>
            <div className="w-max  h-max mt-2 text-xs font-red-200 rounded-md plus-jakarta-sans-body flex justify-center items-center">
              SolidWorks
            </div>
          </div>

          <h3 className="plus-jakarta-sans-heading text-2xl mt-4 mb-2">
            Open Roles
          </h3>
          <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 lg:leading-6">
            Apply for a position on our Mechanics Team! While the team operates
            on an application-only basis, we embrace individuals of diverse
            skill levels and abilities. This presents an excellent opportunity
            to learn and develop mechanical design skills, so don't let a lack
            of experience hold you back from applying! As a member of this team,
            you will actively contribute to the design, 3D modelling,
            prototyping, testing, and manufacturing of our robot components.
            Additionally, we have open recruitment for the pivotal role of Head
            of Mechanical Engineering, focused on ensuring the technical
            excellence of the Mechanics Team. Join us in shaping the future of
            our robotic systems!
          </p>
          {/* <p className="plus-jakarta-sans-body text-lg">There are currently no open roles for the electronics team.</p> */}
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
              The Mechanics team gives shape and character to our team of robots
              and is a great way to get started in the club. Members are
              introduced to the basics of CAD and work on designing components
              such as base-plates, motor mounts and kicker systems, usually
              under the supervision of more senior members.<br></br>
              <br></br>
              During this process, the mechanics team focuses on creating an
              efficient design workflow and generating documentation so that
              future team members can learn about how our robots have evolved
              over time. Mechanics members primarily use SolidWorks to
              familiarize themselves with the basics of mechanical design and
              experience teamwork in a production environment.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
}
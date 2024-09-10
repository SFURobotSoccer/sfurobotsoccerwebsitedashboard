import aboutImageOne from "../../images/aboutImage2.webp";
import aboutImageTwo from "../../images/aboutImageOne.webp";

export const AboutUs = () => {
  return (
    <>
      <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
        Our Journey
      </h2>

      <div className="flex flex-col lg:flex-col gap-4 mt-2 lg:mt-6 items-center">
        <div className="plus-jakarta-sans-body text-md leading-7 pr-3">
          <p>
            Welcome to the Simon Fraser University Robot Soccer Club! Our club
            is dedicated to promoting an interest in robotics and soccer among
            students by combining the knowledge of software, firmware,
            electronics, and mechanics.
            <br></br>
            <br></br>
            We believe that robotics and soccer are a perfect match - both
            require teamwork, strategy, and problem-solving. Our club members
            learn about robotics and programming by building and programming
            robots to compete in robot soccer matches against other schools.
            <br></br>
            <br></br>
            Our club is divided into four teams, software, firmware,
            electronics, and mechanics, each responsible for different aspects
            of the robot design and performance. The software team develops and
            programs the robot's control systems and AI, the electronics team
            designs and builds the robot's power and communication systems, and
            the mechanics team designs and fabricates the robot's body and
            actuators.
          </p>
        </div>
        <div className="lg:h-96 overflow-y-hidden flex items-center rounded-md">
          <img className="rounded-md grayscale" src={aboutImageOne}></img>
        </div>
      </div>

      <div className="flex flex-col lg:flex-col gap-4 mt-6 items-center">
        <div className="plus-jakarta-sans-body text-md leading-7 pr-3">
          <p>
            Our club is open to students of all skill levels, from those who
            have never worked with robots before to those who have prior
            experience. We provide training and resources to help our members
            learn and improve in their respective teams.
            <br></br>
            <br></br>
            We participate in various local, regional, and national robotics
            competitions and events throughout the year, where we get to
            showcase our robots and compete against other teams. We also hold
            regular meetings and practice sessions, where we work on building
            and programming our robots, as well as refining our strategies for
            competition.
            <br></br>
            <br></br>
            We are more than just a robotics club, we are a community of
            students who share a passion for robotics and soccer. We encourage
            and support each other to learn, grow, and succeed. Join us today
            and be part of a winning team!
          </p>
        </div>
        <div className="lg:h-96 overflow-y-hidden flex items-center rounded-md">
          <img className="rounded-md grayscale" src={aboutImageTwo}></img>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center">
                <div className="lg:w-1/2">
                    <img className='rounded-md' src={aboutImageTwo}></img>
                </div>
                <div className="lg:w-1/2 plus-jakarta-sans-body text-lg leading-7 pl-3">
                    
                </div>
            </div>     */}
    </>
  );
};

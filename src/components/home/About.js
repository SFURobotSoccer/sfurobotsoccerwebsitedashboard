import { Link } from "react-router-dom";
import meeting from "../../images/meetingPhoto.webp";
import { FiArrowUpRight } from "react-icons/fi";

export const About = () => {
  return (
    <div className="w-11/12 ml-auto mr-auto lg:w-full mt-10 lg:mt-32 flex items-center flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 flex flex-col">
        <h2 className="plus-jakarta-sans-heading text-xl mb-4">
          Intro to SFU Robot Soccer
        </h2>
        <h3 className="plus-jakarta-sans-body text-md text-black text-opacity-60 mb-3">
          SFU's first Robot Soccer club aims to combine the excitement of soccer
          with the future of automated technology as we compete in RoboCup
          Soccer competitions. Our team encourages students from all programs to
          come together and learn concepts that are not taught in class and get
          hands-on experience with robotics, artificial intelligence, and
          teamwork.
        </h3>
        <Link
          id="buttonPrimary"
          to={"/about"}
          className="w-max mb-4 lg:mb-0 flex items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
        >
          More about us <FiArrowUpRight className="mt-0.5" strokeWidth={3} />
        </Link>
      </div>
      <div className="lg:w-2/5">
        <img src={meeting} className="rounded-xl"></img>
      </div>
    </div>
  );
};

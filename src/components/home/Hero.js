import { FiUserPlus } from "react-icons/fi";
import robotPhoto from "../../images/linkedin1.webp";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="w-full pl-6 bg-transparent pt-32 lg:pt-0 h-max z-10 pb-32 mb-6 lg:h-max lg:pl-10 lg:mt-32 flex flex-col lg:flex-row lg:justify-between lg:mb-32 lg:pb-3">
        <div className="w-10/12 z-10">
          <h2 className="plus-jakarta-sans-body text-sm text-black text-opacity-70 tracking-widest ml-1 lg:ml-2">
            Simon Fraser University
          </h2>
          <h2 className="plus-jakarta-sans-heavy text-8xl lg:text-9xl lg:uppercase mb-14 lg:mb-16">
            <span className="text-red-700">Robot</span> Soccer
          </h2>
          <h2 className="plus-jakarta-sans-body text-md mr-8 lg:mr-0 lg:w-2/3 text-black text-opacity-30 tracking-wide mb-4 lg:mb-0 ml-1 lg:ml-2">
            Build a legacy and tradition of extracurricular innovation and
            engineering engagement.
          </h2>
        </div>
        <Link
          id="buttonPrimary"
          to={"/join"}
          className="flex w-max z-10 lg:hidden items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
        >
          {" "}
          <FiUserPlus strokeWidth={3} /> Join our Team
        </Link>

        <div className="hidden lg:block w-1/2 h-96 mr-14 relative">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-96 rounded-2xl bg-red-700 transform translate-x-8 -translate-y-8 z-0"></div>
            <div className="rounded-2xl heroImage overflow-hidden flex items-center justify-center absolute inset-0 z-10">
              <img
                className="object-cover w-full h-full transform scale-150 translate-x-10" // Adjust scale and translate here
                src={robotPhoto}
                alt="Robot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 h-10/12 top-0 z-0 lg:hidden overflow-hidden">
        <img
          loading="lazy"
          className="w-full h-full object-cover opacity-10" // Adjust translate-x value here
          src={robotPhoto}
          alt="Robot Background"
        />
      </div>
    </>
  );
};

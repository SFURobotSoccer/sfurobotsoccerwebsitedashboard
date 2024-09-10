import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const BecomeSponsor = () => {
  return (
    <>
      <div className="flex w-11/12 lg:w-full ml-auto mr-auto flex-col bg-gray-100 bg-opacity-50 rounded-lg py-7 lg:py-4 pr-3 lg:flex-row gap-10">
        <div className="lg:w-1/2 ml-6 mr-6 h-max lg:py-5 rounded-xl lg:ml-10">
          <h1 className="plus-jakarta-sans-heading text-xl">Join our Team</h1>
          <h3 className="plus-jakarta-sans-body leading-6 text-sm text-opacity-50 mt-1 text-black">
            Are you interested in robotics and soccer? Do you want to be part of
            a winning team? Then come and join us at the Simon Fraser University
            Robot Soccer Club!
          </h3>
          <Link
            id="buttonPrimary"
            to={`/join`}
            className="mt-4 flex w-max  items-center text-left gap-1 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
          >
            Join SFU Robot Soccer{" "}
            <FiArrowUpRight
              className="mt-0.5 text-lg lg:text-sm"
              strokeWidth={3}
            />
          </Link>
        </div>
        <div className="lg:w-1/2 ml-6 mr-6 h-max lg:py-5 rounded-xl">
          <h1 className="plus-jakarta-sans-heading text-xl">
            Become a Sponsor
          </h1>
          <h3 className="plus-jakarta-sans-body leading-6 text-sm text-opacity-50 mt-1 text-black">
            As a sponsor, your organization will shape our club's future. Your
            support in resources, expertise, or funding drives innovative
            robotics projects and develops future engineers.
          </h3>
          <Link
            id="buttonPrimary"
            to={`/sponsors/becomesponsor`}
            className="mt-4 w-max flex items-center text-left gap-1 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
          >
            Sponsor SFU Robot Soccer{" "}
            <FiArrowUpRight
              className="mt-0.5 text-lg lg:text-sm"
              strokeWidth={3}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Didyouknow = () => {
  return (
    <>
      {/* <h2 className="text-2xl plus-jakarta-sans-heading text-left w-full flex mt-10 items-center gap-2 mb-2">Sponsor Packages</h2> */}
      <div className="flex flex-col lg:flex-row w-full h-max bg-gray-100 bg-opacity-50 gap-16 mt-16 mb-7 px-14 py-10 justify-between rounded-lg">
        <div className="flex-1 h-max mx-2 rounded-md flex flex-col items-left">
          <h2 className="text-lg plus-jakarta-sans-heading flex items-center text-left gap-1 mb-1">
            Innovation Partner
          </h2>
          <p className="text-sm text-black text-opacity-60 plus-jakarta-sans-body flex leading-6 items-center text-left gap-1 mb-2">
            Exclusive logo placement and VIP access to all events.
          </p>
          <Link
            to={"/sponsors/sponsorspackages"}
            id="buttonSecondary"
            className="lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-0 py-0 tracking-wide w-max mt-1 rounded-md"
          >
            More Info
            <FiArrowUpRight strokeWidth={3} />{" "}
          </Link>
        </div>
        <div className="flex-1 h-max mx-2 rounded-md flex flex-col items-left">
          <h2 className="text-lg plus-jakarta-sans-heading flex items-left text-left gap-1 mb-1">
            Visionary Sponsor
          </h2>
          <p className="text-sm text-black text-opacity-60 plus-jakarta-sans-body flex leading-6 items-center text-left gap-1 mb-2">
            Prominent logo visibility and invitations to major events.
          </p>
          <Link
            to={"/sponsors/sponsorspackages"}
            id="buttonSecondary"
            className="  lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-0 py-0 tracking-wide w-max mt-1 rounded-md"
          >
            More Info
            <FiArrowUpRight strokeWidth={3} />{" "}
          </Link>
        </div>
        <div className="flex-1 h-max mx-2 rounded-md flex flex-col items-left">
          <h2 className="text-lg plus-jakarta-sans-heading flex items-center text-left gap-1 mb-1">
            Community Sponsor
          </h2>
          <p className="text-sm text-black text-opacity-60 plus-jakarta-sans-body flex leading-6 items-center text-left gap-1 mb-2">
            Logo on secondary gear and select event invitations.
          </p>
          <Link
            id="buttonSecondary"
            to={"/sponsors/sponsorspackages"}
            className="  lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-0 py-0 tracking-wide w-max mt-1 rounded-md"
          >
            More Info
            <FiArrowUpRight strokeWidth={3} />{" "}
          </Link>
        </div>
        <div className="flex-1 h-max mx-2 rounded-md flex flex-col items-left">
          <h2 className="text-lg plus-jakarta-sans-heading flex items-center text-left gap-1 mb-1">
            Supporting Sponsor
          </h2>
          <p className="text-sm text-black text-opacity-60 plus-jakarta-sans-body flex leading-6 items-center text-left gap-1 mb-2">
            Logo on our website and certain event banners when applicable.
          </p>
          <Link
            to={"/sponsors/sponsorspackages"}
            id="buttonSecondary"
            className="  lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-0 py-0 tracking-wide w-max mt-1 rounded-md"
          >
            More Info
            <FiArrowUpRight strokeWidth={3} />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

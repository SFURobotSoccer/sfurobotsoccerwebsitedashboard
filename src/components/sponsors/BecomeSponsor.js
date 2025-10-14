import {
  FiArrowUpRight,
  FiDownload,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import NewSponsorPackageSFURS from "../../files/SFURS Sponsorship Package.pdf";

export const BecomeSponsor = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-col w-11/12 rounded-lg">
          {/* <h2 className="text-2xl plus-jakarta-sans-heading text-left w-full flex items-center gap-2 mb-2">Become a Sponsor</h2> */}
          <p className="plus-jakarta-sans-body text-black text-opacity-60 text-md leading-7 text-left flex gap-2">
            As a sponsor, your organization will play a crucial role in shaping
            the future of our club. Our sponsorship program is designed to
            create mutually beneficial relationships, where your support in
            resources, expertise, or funding directly contributes to
            groundbreaking robotics projects and the development of
            next-generation engineers. In return, your organization gains
            visibility among a talented pool of students, access to cutting-edge
            research and testing events, and association with a leading force in
            the field of robotics.
          </p>
          <div className="flex flex-row items-center gap-3">
            <Link
              to={"/sponsors/becomesponsor"}
              id="buttonPrimary"
              className="lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-5 lg:px-6 py-2 tracking-wide w-max mt-3 rounded-md"
            >
              Sponsor Now
              <FiArrowUpRight strokeWidth={3} />{" "}
            </Link>
            <a
              href={NewSponsorPackageSFURS}
              download="SFURS_Sponsorship_Package.pdf"
              id="buttonPrimary"
              className="lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-5 lg:px-6 py-2 tracking-wide w-max mt-3 rounded-md"
            >
              Download Sponsorship Package
              <FiDownload strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

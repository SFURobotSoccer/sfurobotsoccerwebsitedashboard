import { FaRegFutbol } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiBox,
  FiCode,
  FiGitPullRequest,
  FiSliders,
  FiTerminal,
  FiTool,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export const TeamSelect = () => {
  const teams = [
    {
      team: "Software Team",
      icon: <FiCode size={14} strokeWidth={3} />,
      description: "Developing interfaces",
      linkTo: "/teams/software",
    },
    {
      team: "Firmware Team",
      icon: <FiTerminal size={14} strokeWidth={3} />,
      description: "Developing circuit boards",
      linkTo: "/teams/firmware",
    },
    {
      team: "Mechanics Team",
      icon: <FiSliders size={14} strokeWidth={3} />,
      description: "Designing mechanical elements",
      linkTo: "/teams/mechanics",
    },
    {
      team: "Electronics Team",
      icon: <FiGitPullRequest size={14} strokeWidth={3} />,
      description: "Designing electronic components",
      linkTo: "/teams/electronics",
    },
    {
      team: "Executive Team",
      icon: <FiCode size={14} strokeWidth={3} />,
      description: "Bring ideas to life",
      linkTo: "/join",
    },
    {
      team: "Kick Off Program",
      icon: <FaRegFutbol size={14} strokeWidth={2} />,
      description: "Kick Off into RS",
      linkTo: "/kickoff",
    },
  ];

  return (
    <div className="w-11/12 h-max flex flex-wrap gap-4 lg:gap-14 mt-4 lg:mt-6 flex-col lg:flex-row">
      {teams.map((team, index) => (
        <Link
          key={index}
          to={`${team.linkTo}`}
          className="teamSelect px-4 py-4 lg:py-3 text-left flex rounded-xl flex-col lg:w-1/5"
        >
          <h4 className="plus-jakarta-sans-heading text-xl text-black mb-1 flex flex-row items-start gap-2">
            <p className="mt-2">{team.icon}</p>
            {team.team}
          </h4>
          <p className="plus-jakarta-sans-body text-sm mb-3 text-black ml-5 pl-0.5">
            {team.description}
          </p>
          <div
            id="buttonPrimary"
            className="flex w-max items-center px-4 gap-2 plus-jakarta-sans-button text-xs ml-5 py-2 tracking-wide rounded-md"
          >
            Learn more
            <FiArrowUpRight strokeWidth={3} />
          </div>
        </Link>
      ))}
    </div>
  );
};

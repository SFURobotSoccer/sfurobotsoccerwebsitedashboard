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
  ];

  return (
    <div className="w-full h-max flex flex-col lg:flex-row gap-4 lg:gap-14 mt-4 lg:mt-6 flex-row">
      {teams.map((team, index) => (
        <Link
          key={index}
          to={`${team.linkTo}`}
          className="teamSelect px-4 py-4 lg:py-3 text-left flex rounded-xl flex-col lg:w-1/5 "
        >
          <h4 className="plus-jakarta-sans-heading text-xl text-black mb-1 flex flex-row items-center gap-2">
            {team.icon}
            {team.team}
          </h4>
          <p className="plus-jakarta-sans-body text-sm mb-3 text-black">
            {team.description}
          </p>
          <div
            id="buttonPrimary"
            className="flex w-max items-center px-4 gap-2 plus-jakarta-sans-button text-xs px-0 py-2 tracking-wide rounded-md"
          >
            Learn more
            <FiArrowUpRight strokeWidth={3} />{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};

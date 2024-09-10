import { Footer } from "../components/Footer";
import { Alumni } from "../components/teams/Alumni";
import { Coordinators } from "../components/teams/Coordinators";
import { Directors } from "../components/teams/Directors";
import { Execs } from "../components/teams/Execs";
import { TeamSelect } from "../components/teams/TeamSelect";

export const Teams = () => {
  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
          Our Teams
        </h2>

        <TeamSelect />

        <Execs />

        <Directors />

        <Coordinators />

        <Alumni />
      </div>
      <Footer />
    </>
  );
};

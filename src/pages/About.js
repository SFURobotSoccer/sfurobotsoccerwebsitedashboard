import { Footer } from "../components/Footer";
import { AboutUs } from "../components/about/AboutUs";
import { History } from "../components/about/History";

export const About = () => {
  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <AboutUs />

        <History />
      </div>

      <Footer />
    </>
  );
};

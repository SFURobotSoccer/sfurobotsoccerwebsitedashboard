import { Footer } from "../components/Footer";
import { About } from "../components/home/About";
import { BecomeSponsor } from "../components/home/BecomeSponsor";
import { CurrentSponsors } from "../components/home/CurrentSponsors";
import { Hero } from "../components/home/Hero";
import { OpenRoles } from "../components/home/OpenRoles";

export const Home = () => {
  return (
    <>
      <div className=" pt-10 lg:pt-20 lg:px-20 w-full overflow-hidden">
        <Hero />
        <h2 className="absolute plus-jakarta-sans-button flex lg:hidden bottom-6 text-xs left-6 fadeDownAnimation">
          scroll ↓
        </h2>
        <BecomeSponsor />
        <About />
        <OpenRoles />
      </div>

      <Footer />
    </>
  );
};

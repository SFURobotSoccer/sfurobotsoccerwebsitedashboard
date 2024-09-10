import { Footer } from "../components/Footer";
import { BecomeSponsor } from "../components/sponsors/BecomeSponsor";
import { CurrentSponsors } from "../components/sponsors/CurrentSponsors";
import { Didyouknow } from "../components/sponsors/DidYouKnow";
import { DonateNow } from "../components/sponsors/DonateNow";

export const Sponsors = () => {
  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-7">
          Become A Sponsor
        </h2>

        <BecomeSponsor />

        <Didyouknow />

        {/* <DonateNow /> */}

        <CurrentSponsors />
      </div>
      <Footer />
    </>
  );
};

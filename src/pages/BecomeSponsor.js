import { Footer } from "../components/Footer";
import { BecomeSponsorForm } from "../components/sponsors/BecomeSponsorForm";
import sponsorImage from '../images/peopleimages/clubPhoto.webp';

export const BecomeSponsor = () => {
    return (
      <>
        <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
          <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-1">
            Become a Sponsor
          </h2>
          <p className="mb-7 lg:w-3/4 plus-jakarta-sans-body text-black text-opacity-60 text-sm leading-7 text-left flex gap-2">
            Fill out this form to become a sponsor for SFU Robot Soccer. If you
            would like to find more information regarding what a sponsorship
            entails and the various levels of sponsorship available, check out
            the sponsorship packages page now.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <BecomeSponsorForm />
            </div>

            <div className="lg:w-1/2 h-96 rounded-md">
              <img
                src={sponsorImage}
                className="object-cover rounded-lg grayscale h-full w-full"
                alt="Sponsor"
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

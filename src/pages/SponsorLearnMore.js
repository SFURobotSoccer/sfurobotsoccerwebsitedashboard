import { Footer } from "../components/Footer"
import { SponsorPackageTableMobile } from "../components/sponsors/SponsorPackageTableMobile"
import { SponsorshipPackageTableDesktop } from "../components/sponsors/SponsorshipPackageTableDesktop"

export const SponsorsLearnMore = () => {
    return (
      <>
        <div className="pt-28 lg:pt-28  overflow-hidden flex flex-col lg:items-start lg:items-col px-20">
          <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full">
            Sponsorship Packages
          </h2>

          <div className="hidden lg:block">
            <p className="mb-7 lg:w-3/4 mt-1 plus-jakarta-sans-body text-black text-opacity-60 text-sm leading-7 text-left flex gap-2">
              Below you can find all information regarding each sponsorship
              package and what you will be receiving in each.
            </p>
            <SponsorshipPackageTableDesktop />
          </div>

          <div className="flex lg:hidden w-screen overflow-x-hidden">
            <SponsorPackageTableMobile />
          </div>
        </div>

        <Footer />
      </>
    );
}
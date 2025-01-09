import { Footer } from "../components/Footer";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

export const Join = () => {
  const openRoles = [
    {
      name: "VP of Administration",
      description:
        "Help track and manage all club expenses, ensuring transparency and accuracy in financial records Help ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds Data entry of club finances into master sheet.",
      linkApply:
        "https://docs.google.com/forms/d/1amHEgnKYtp6_YIL1SKOG5hw6pCnMEJ5h0yinSNteRV4/edit?usp=forms_home&ths=true",
      descriptionLink: null,
    },
    {
      name: "VP of Public Relations",
      description:
        "Present financial plans and proposals to potential sponsors to secure funding for club initiatives. Track and manage all club expenses, ensuring transparency and accuracy in financial records. Ensure compliance with SFSS and FAS funding guidelines to properly allocate and spend funds. Develop and oversee the club's budget, adjusting for changes in revenue and expenses throughout the year.",
      linkApply:
        "https://docs.google.com/forms/d/1amHEgnKYtp6_YIL1SKOG5hw6pCnMEJ5h0yinSNteRV4/edit?usp=forms_home&ths=true",
      descriptionLink: null,
    },
  ];

  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-3">
          Join The Team
        </h2>

        <h3 className="plus-jakarta-sans-heading text-2xl mb-0">Open Roles</h3>
        <p className="plus-jakarta-sans-body text-black w-11/12 text-sm lg:mb-5 text-opacity-40 leading-6"></p>
        {/* <p className="plus-jakarta-sans-body text-lg">There are currently no open roles for the electronics team.</p> */}
        <div className="flex gap-10 mt-10 lg:mt-0 lg:gap-4 flex-col">
          {openRoles.length !== 0 ? (
            openRoles.map((role, index) => (
              <>
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-col lg:w-10/12">
                    <h2 className="plus-jakarta-sans-button text-xl">
                      {role.name}
                    </h2>
                    <p className="plus-jakarta-sans-body text-sm tracking-wide leading-6 text-black mt-1 mb-2">
                      {role.description}
                    </p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <a href={role.linkApply} target="_blank">
                      <button
                        id="buttonPrimary"
                        className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                      >
                        Apply Now
                        <FiArrowUpRight strokeWidth={3} />{" "}
                      </button>
                    </a>
                    {role.descriptionLink != null && (
                      <a href={role.descriptionLink} target="_blank">
                        <button
                          id="buttonSecondary"
                          className="flex w-max items-center gap-2 plus-jakarta-sans-button text-sm px-6 py-2 tracking-wide rounded-md"
                        >
                          Role Description
                          <FiFileText strokeWidth={3} />{" "}
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="lg:w-10/12 line bg-black bg-opacity-100 lg:mt-4 lg:mb-4"></div>
              </>
            ))
          ) : (
            <h2 className="plus-jakarta-sans-body text-black text-lg lg:leading-6">
              There are currently not any open positions at SFU RS, however keep
              up to date with our social media, and join our{" "}
              <a
                className="text-red-700"
                href="https://discord.com/invite/CK3nws9YPY"
                target="_blank"
              >
                discord
              </a>{" "}
              to find out when they next openings get released!
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

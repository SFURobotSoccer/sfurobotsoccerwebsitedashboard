import sfuRobotEmail from "../images/sfuRobotEmail2.png";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <>
      <div className="pt-24 lg:pt-28 overflow-hidden flex flex-col items-center lg:items-start lg:items-col px-6 lg:px-20">
        <h2 className="text-3xl plus-jakarta-sans-heading text-left w-full mb-7">
          Get in Touch
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="lg:w-1/2 lg:bg-gray-100 lg:bg-opacity-30 lg:px-8 lg:py-7 rounded-lg">
            <ContactForm />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center lg:items-start lg:pl-20 h-96">
            <h3 className="plus-jakarta-sans-button text-lg lg:text-md mt-6 mb-1">
              <button>
                Email <span className="icons text-red-700">✉</span>
              </button>
            </h3>
            <p>
              <h4 className="plus-jakarta-sans-body text-black transition duration-500 ease-in-out lg:hover:text-opacity-100 lg:text-opacity-50 text-sm mb-1 unselectable">
                contact@sfurobotsoccer.com
              </h4>
            </p>

            <h3 className="plus-jakarta-sans-button text-lg lg:text-md mt-6 mb-1">
              <button>
                Discord <span className="icons text-red-700">â</span>
              </button>
            </h3>
            <a
              href="https://discord.com/invite/CK3nws9YPY"
              target="_blank"
              className="hover:cursor-pointer"
            >
              <h4 className="plus-jakarta-sans-body text-black transition duration-500 ease-in-out lg:hover:text-opacity-100  lg:text-opacity-50 text-sm mb-1">
                SFU Robotic Soccer
              </h4>
            </a>

            <h3 className="plus-jakarta-sans-button text-lg lg:text-md mt-6 mb-1">
              <button>
                Instagram <span className="icons text-red-700">Ú</span>
              </button>
            </h3>
            <a
              href="https://www.instagram.com/sfurobotsoccer/"
              target="_blank"
              className="hover:cursor-pointer"
            >
              <h4 className="plus-jakarta-sans-body text-black transition duration-500 ease-in-out lg:hover:text-opacity-100  lg:text-opacity-50 text-sm mb-1">
                @sfurobotsoccer
              </h4>
            </a>

            <h3 className="plus-jakarta-sans-button text-lg lg:text-md mt-6 mb-1">
              <button>
                LinkedIn <span className="icons text-red-700">Ì</span>
              </button>
            </h3>
            <a
              href="https://www.linkedin.com/company/sfurs/"
              target="_blank"
              className="hover:cursor-pointer"
            >
              <h4 className="plus-jakarta-sans-body text-black transition duration-500 ease-in-out lg:hover:text-opacity-100  lg:text-opacity-50 text-sm mb-1">
                SFU Robotic Soccer
              </h4>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

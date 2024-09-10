import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-100 bg-opacity-50 mt-16 lg:px-16 pb-8 lg:mt-16 flex flex-col">
        <div className="flex flex-col lg:flex-row py-3 lg:py-6">
          <div className="w-full lg:w-1/2 h-28 lg:h-60 flex-col flex justify-center">
            <h2 className="ml-6 lg:ml-0 font-500 text-xl plus-jakarta-sans-heading">
              SFU Robotic Soccer
            </h2>
            <a
              href="https://www.google.com/maps/place/Simon+Fraser+University/@49.2790886,-122.9245569,16z/data=!4m10!1m2!2m1!1ssfu+burnaby!3m6!1s0x548679c0857a2227:0x506c3f6e30b55b!8m2!3d49.2790886!4d-122.9201795!15sCgtzZnUgYnVybmFieVoNIgtzZnUgYnVybmFieZIBEnJlc2VhcmNoX2luc3RpdHV0ZeABAA!16zL20vMDcxXzg?entry=ttu0"
              target="_blank"
            >
              <h4 className="ml-6 lg:ml-0 font-300 text-md plus-jakarta-sans-body">
                8888 University Dr W, Burnaby, BC
              </h4>
            </a>
            <div className="flex footerSocials ml-5 lg:ml-0 flex-row gap-4 mt-2">
              <a
                href="https://www.instagram.com/sfurobotsoccer/"
                target="_blank"
              >
                <h4 className="icons text-4xl">Ú</h4>
              </a>
              <a href="https://discord.com/invite/CK3nws9YPY" target="_blank">
                <h4 className="icons text-4xl">â</h4>
              </a>
              <a href="https://www.linkedin.com/company/sfurs/" target="_blank">
                <h4 className="icons text-4xl">Ì</h4>
              </a>
            </div>
            {/* <div className="hidden lg:block">
                        <h3 className="font-300 text-xl mt-6 mb-2">Subscribe for Emails</h3>
                        <div className='flex lg:w-full'>
                            <input type="email" className='font-300 pl-3 text-xl w-full border-2 border-r-0 border-black border-opacity-20 h-10 rounded-bl-md rounded-tl-md'></input>
                            <button type='submit' className='font-400 rounded-tr-md rounded-br-md px-4 py-2 w-max bg-black text-white'>Subscribe</button>
                        </div>
                    </div> */}
          </div>

          <div className="w-full overflow-x-hidden  flex flex-col lg:w-1/2 h-52 pb-4 justify-center items-start lg:items-end lg:h-60">
            <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/"
            >
              Home
            </Link>
            <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/teams"
            >
              Teams
            </Link>
            <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/sponsors"
            >
              Sponsors
            </Link>
            <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/about"
            >
              About
            </Link>
            <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/contact"
            >
              Contact
            </Link>
            {/* <Link
              className="ml-6 lg:ml-0 lg:ml-0 plus-jakarta-sans-body footerLinks"
              to="/execcreateannouncements"
            >
              Post Announcement
            </Link> */}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="block lg:hidden mb-4 ml-6 text-sm lg:ml-2 text-black plus-jakarta-sans-body text-opacity-35">
            Designed and Developed 2024
          </p>
          <p className="hidden lg:block mb-2 ml-6 text-sm lg:ml-0 text-black plus-jakarta-sans-body text-opacity-35">
            Designed and Developed 2024
          </p>
          <p className="ml-6 lg:ml-0 mb-6 mr-6 text-xs lg:ml-0 text-black plus-jakarta-sans-body text-opacity-50">
            Disclaimer: “Simon Fraser University”are registered trademarks of
            Simon Fraser University. This website is a student run website and
            is maintained, hosted, and operated independently of Simon Fraser
            University. The activities on this website are not supervised or
            endorsed by SFU and information contained on this website does not
            necessarily reflect the opinions or official positions of Simon
            Fraser University.
          </p>
        </div>
      </div>
    </>
  );
};

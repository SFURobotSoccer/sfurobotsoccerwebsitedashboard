import React from "react";
import { FiArrowUpRight, FiHome } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";


export const Sidebar = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const changePage = (page) => {
        navigate(`/${page}`);
        window.scrollTo(0,0);
    }

    const isHomeActive = location.pathname === "/";
    const isTeamsActive = location.pathname.includes("/teams");
    const isAboutActive = location.pathname.includes("about");
    const isContactActive = location.pathname.includes("contact");
    const isSponsorsActive = location.pathname.includes("sponsors");

    return (
        <>
        <div className="hidden lg:flex fixed pt-20 pl-6 pr-6 flex flex-col gap-4 h-screen w-1/5 sideBarBG">
            <button
                id={isHomeActive ? 'buttonPrimary' : 'buttonSecondary'}
                onClick={() => changePage("")}
                className="items-center mt-2 flex gap-2 text-sm px-6 w-full flex flex-start py-3 tracking-wider rounded-md"
            >
                <FiHome strokeWidth={3} />
                <h1 className="plus-jakarta-sans-button tracking-wider">Home</h1>
            </button>

            <button
                id={isTeamsActive ? 'buttonPrimary' : 'buttonSecondary'}
                onClick={() => changePage("teams")}
                className="items-center flex gap-2 text-sm px-6 w-full flex flex-start py-3 tracking-wider rounded-md"
            >
                <FiUsers strokeWidth={3} />
                <h1 className="plus-jakarta-sans-button tracking-wider">Teams</h1>
            </button>


            <button
                id={isSponsorsActive ? 'buttonPrimary' : 'buttonSecondary'}
                onClick={() => changePage("sponsors")}
                className="items-center flex gap-2 text-sm px-6 w-full flex flex-start py-3 tracking-wider rounded-md"
            >
                <FiTrendingUp strokeWidth={3} />
                <h1 className="plus-jakarta-sans-button tracking-wider">Sponsors</h1>
            </button>
            <button
                id={isAboutActive ? 'buttonPrimary' : 'buttonSecondary'}
                onClick={() => changePage("about")}
                className="items-center flex gap-2 text-sm px-6 w-full flex flex-start py-3 tracking-wider rounded-md"
            >
                <FiInfo strokeWidth={3} />
                <h1 className="plus-jakarta-sans-button tracking-wider">About</h1>
            </button>
            <button
                id={isContactActive ? 'buttonPrimary' : 'buttonSecondary'}
                onClick={() => changePage("contact")}
                className="items-center flex gap-2 text-sm px-6 w-full flex flex-start py-3 tracking-wider rounded-md"
            >
                <FiMail strokeWidth={3} />
                <h1 className="plus-jakarta-sans-button tracking-wider">Contact</h1>
            </button>

            <button
                id="buttonPrimary2"
                className="w-60 flex flex-row items-center fixed bottom-6 flex gap-2 text-sm px-6 w-full flex justify-between py-4 tracking-wider rounded-md"
            >
                <h1 className="text-left text-black text-opacity-70 plus-jakarta-sans-heading tracking-wider">Become a sponsor</h1>
                <FiArrowUpRight className="mt-0.5 text-lg lg:text-sm" strokeWidth={3} />
            </button>
        </div>
        </>
    );
};

import ieeeLogo from '../../images/peopleimages/ieeeLogo.webp';
import fasLogo from '../../images/peopleimages/sfuFASlogo.webp';
import sfssLogo from '../../images/peopleimages/sfssLogo.webp';
import egbcLogo from '../../images/peopleimages/egbcLogo.webp';
import maxonLogo from '../../images/peopleimages/maxonLogo.webp';
import altiumLogo from '../../images/peopleimages/altiumLogo.webp';
import amdLogo from '../../images/peopleimages/amdLogo.webp';
import dassaultLogo from '../../images/peopleimages/dassaultLogo.webp';
import { FiAward } from 'react-icons/fi';

export const CurrentSponsors = () => {
    const sponsors = [
        {
            name: "IEEE",
            website: "https://www.ieee.org/",
            image: ieeeLogo,
            platinum: true
        },
        {
            name: "SFU FAS",
            website: "https://www.sfu.ca/fas.html",
            image: fasLogo,
            platinum: true
        },
        {
            name: "SFSS",
            website: "https://sfss.ca/",
            image: sfssLogo,
            platinum: true
        },
        {
            name: "Engineers & Geoscientists BC",
            website: "https://www.egbc.ca/",
            image: egbcLogo,
            platinum: false
        },
        {
            name: "Maxon",
            website: "https://www.maxon.net/en",
            image: maxonLogo,
            platinum: false
        },
        {
            name: "Altium",
            website: "https://www.altium.com/",
            image: altiumLogo,
            platinum: false
        },
        {
            name: "AMD",
            website: "https://www.amd.com/en.html",
            image: amdLogo,
            platinum: false
        },
        {
            name: "Dassault Systems",
            website: "https://www.3ds.com/",
            image: dassaultLogo,
            platinum: false
        },
    ];

    return (
        <div className="w-full">
            <h2 className="text-2xl plus-jakarta-sans-heading text-left w-full flex mt-10 items-center gap-2 mb-6">Current Sponsors</h2>
            <div className="flex flex-wrap gap-10">
                {sponsors.map((sponsor, index) => (
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" key={index} className="relative teamSelect px-7 py-3 bg-white rounded-lg flex items-center justify-center w-10/12 lg:w-1/5 h-32">
                        {sponsor.platinum && (
                            <div className='absolute top-0 right-4 w-6 h-10 bg-opacity-100 rounded-bl-md rounded-br-md bg-yellow-600 flex items-center justify-center'>
                                <FiAward size={18} opacity={0.75} color='white' strokeWidth={1.5} />
                            </div>
                        )}
                        <div className="flex flex-col items-center">
                            <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full" />
                            <p className='plus-jakarta-sans-button text-center mt-3 text-xs text-black text-opacity-50 tracking-wide'>{sponsor.name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

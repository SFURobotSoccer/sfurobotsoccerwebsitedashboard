import IEEElogo from '../../images/ieeeLogo.png';
import SFUfasLogo from '../../images/sfuFasLogo.png';
import SFSSlogo from '../../images/sfssLogo.png';

export const CurrentSponsors = () => {
    return(
        <div className='ml-10 mt-40 mr-24 flex flex-col'>
            <h2 className='text-center text-black text-opacity-40 plus-jakarta-sans-body'>Some of our sponsors...</h2>
            <div className='flex flex-col lg:flex-row justify-around items-center'>
                <div className='w-52 h-auto'>
                    <img className='grayscale opacity-50' src={IEEElogo}></img>
                </div>
                <div className='w-52 h-auto'>
                    <img className='grayscale opacity-50' src={SFUfasLogo}></img>
                </div>
                <div className='w-52 h-auto'>
                    <img className='grayscale opacity-50' src={SFSSlogo}></img>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";

export const SponsorPackageTableMobile = () => {

    const [selectedPackage, setSelectedPackage] = useState("Platinum");

    const handlePackageSelect = (packageSelect) => {
        setSelectedPackage(packageSelect);
    };

    return(
        <>
        <div className="flex flex-col">
            <p className="mb-7 lg:w-3/4 plus-jakarta-sans-body text-black text-opacity-60 text-sm leading-6 text-left flex gap-2">Click which package you would like to <br></br> learn more about.</p>
            <div className="mt-1 flex gap-4 w-screen flex-wrap">
                <button className={`primaryButton ${selectedPackage === 'Platinum' ? 'active' : ''}`} onClick={() => handlePackageSelect('Platinum')}>Platinum</button>
                <button className={`primaryButton ${selectedPackage === 'Gold' ? 'active' : ''}`} onClick={() => handlePackageSelect('Gold')}>Gold</button>
                <button className={`primaryButton ${selectedPackage === 'Silver' ? 'active' : ''}`} onClick={() => handlePackageSelect('Silver')}>Silver</button>
                <button className={`primaryButton ${selectedPackage === 'Bronze' ? 'active' : ''}`} onClick={() => handlePackageSelect('Bronze')}>Bronze</button>
            </div>

            <div className='w-10/12 overflow-hidden flex flex-row'>        
                <div className='h-max w-2/3'>
                    <div className='flex flex-col'>
                        <p className='h-14'></p>
                        <p className='h-24 py-20 border-2 rounded-tl-xl border-black border-r-0 border-b-0 border-opacity-10 px-6 flex items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Acknowledged and thanked at internal events</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 px-6 flex items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Logo on website</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 px-6 flex items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Logo on jersey</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 flex px-6 items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Acknowledgements on Social Media</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 flex px-6 items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Company logo on posters</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 flex px-6 items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Company acknowledgement in Newsletters</p>
                        <p className='h-24 py-20 border-2 border-black border-opacity-10 border-r-0 border-b-0 flex px-6 items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Inclusion in outreach events</p>
                        <p className='h-24 py-20 border-2 rounded-bl-xl border-black border-opacity-10 border-r-0 flex px-6 items-center plus-jakarta-sans-body text-black text-opacity-80 text-md'>Distribution of company advertisments to team</p>
                    </div>
                </div>
                <div className='h-max w-48'>
                    {selectedPackage === "Platinum" ? (
                        <div className='flex flex-col justify-center items-center'>
                            <p className='h-14 flex justify-end items-end pb-2 plus-jakarta-sans-button text-lg'>Premium</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-tr-xl border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-br-xl flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                        </div>
                    ): selectedPackage === "Gold" ? (
                        <div className='flex flex-col justify-center items-center'>
                            <p className='h-14 flex justify-end items-end pb-2 plus-jakarta-sans-button text-lg'>Gold</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-tr-xl border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-br-xl flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                        </div>
                    ) : selectedPackage === "Silver" ? (
                        <div className='flex flex-col justify-center items-center'>
                            <p className='h-14 flex justify-end items-end pb-2 plus-jakarta-sans-button text-lg'>Silver</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-tr-xl border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-br-xl flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                        </div>
                    ): selectedPackage === "Bronze" ? (
                        <div className='flex flex-col justify-center items-center'>
                            <p className='h-14 flex justify-end items-end pb-2 plus-jakarta-sans-button text-lg'>Bronze</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-tr-xl border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'>X</p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 border-b-0 flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                            <p className='h-24 py-20 w-full border-2 border-black border-opacity-10 rounded-br-xl flex items-center justify-center plus-jakarta-sans-button font-red-200 text-md'></p>
                        </div>
                    ):(
                        <div>

                        </div>
                    )}
                </div>
            </div>
        </div>
        
        </>
    )
}
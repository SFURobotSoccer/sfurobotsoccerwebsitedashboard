import { FiArrowUpRight, FiGift, FiUser, FiUserPlus, FiUsers } from "react-icons/fi"

export const DonateNow = () => {
    return(
        <div className="w-full mt-10">
            <div>
                <div className="flex flex-col w-11/12 rounded-lg">
                    <h2 className="text-2xl plus-jakarta-sans-heading text-left w-full flex items-center gap-2 mb-2">Make a Donation</h2>
                    <p className="plus-jakarta-sans-body text-black text-opacity-60 text-md leading-7 text-left flex gap-2">As we strive to reach new heights in aerospace technology and provide unparalleled learning experiences for our students, your support becomes instrumental. Every contribution, big or small, helps us purchase essential materials, fund critical experiments, and run testing events. By donating to SFU Robot Soccer, you're not just funding a project; you're investing in the future of space exploration and the education of young, aspiring engineers.</p>
                    <div className="flex flex-row items-center gap-3">
                    <button id='buttonPrimary' className='lg:flex flex items-center gap-2 plus-jakarta-sans-button text-sm px-5 lg:px-6 py-2 tracking-wide w-max mt-3 rounded-md'>Donate Now<FiArrowUpRight strokeWidth={3} /> </button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
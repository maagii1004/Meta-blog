"use client";

import LeaveMessage from "../components/LeaveMessage";

const Page = () => {
    return (
        <div className="flex justify-center">
            <section className="w-[895px] h-[895px] my-24 px-[140px]">
                <h1 className="font-sans text-4xl font-semibold text-black pb-5 pt-4">Contact Us</h1>
                <p className="text-[#696A75] font-normal font-sans text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex gap-16 mt-8">
                    <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl">
                        <h2 className="font-sans text-2xl font-semibold pt-4 pl-4 pb-2.5">Address</h2>
                        <p className="font-sans text-lg font-normal text-[#696A75] px-4">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="w-[294px] h-[133px] border border-[#E8E8EA] rounded-xl">
                        <h2 className="font-sans text-2xl font-semibold pt-4 pl-4 pb-2.5">Contact</h2>
                        <div className="px-4">
                            <p className="font-sans text-lg font-normal text-[#696A75]">313-332-8662</p>
                            <p className="font-sans text-lg font-normal text-[#696A75]">info@email.com</p>
                        </div>
                    </div>
                </div>
                <LeaveMessage/>
            </section>
        </div>
        
    );
};

export default Page;
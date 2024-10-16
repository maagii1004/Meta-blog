"use client";

export const HomeBlogCard = () => {
    return (
        <div className="w-full h-[476px] border border-[#E8E8EA] rounded-lg overflow-hidden hover:cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img src="https://via.placeholder.com/392x240" alt="" className="w-[360px] h-[240px] border rounded-md mx-auto mt-3" />
            <div className="w-24 h-7 rounded-md border border-collapse bg-[#4B6BFB0D] text-[#4B6BFB] px-[10px] py-1 font-medium font-sans text-sm ml-7 mt-6">Technology</div>
            <div className="p-4">
                <p className="text-[#181A2A] mt-1 font-semibold font-sans text-xl pl-3">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <p className="text-[#97989F] mt-5 ml-3">August 20, 2022</p>
            </div>
        </div>
    );
}
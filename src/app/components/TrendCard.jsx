"use client";

export const TrendCard = () => {
    return (
        <div className="w-[289px] h-[320px] bg-gray-300 rounded-[12px] overflow-hidden relative hover:cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img src="https://via.placeholder.com/289x320" alt="Placeholder 1" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#595959] to-transparent"></div>
            <div className="absolute bottom-4 left-4">
                <p className="text-white border-collapse rounded-[6px] bg-[#4B6BFB] w-[86px] px-[10px] py-[4px] text-[12px] font-[500] text-center ml-[10px] mb-[10px]">Technology</p>
                <p className="font-sans font-[600] text-[18px] leading-[28px] text-white px-[10px] py-[5px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
            </div>
        </div>
    );
}
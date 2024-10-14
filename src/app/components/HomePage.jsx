export const HomeP = () => {
    return (
        <div className="mt-10">
            <section className="relative">
                <img src="./largeImg.png" alt="" className="w-[1210px] h-[650px]" />
                <div className="bg-white border rounded-[15px] w-[600px] h-[250px] absolute bottom-0 left-0 mb-4 ml-4 p-[40px]">
                    <p className="text-white border rounded-[6px] bg-[#4B6BFB] w-[100px] px-[10px] py-[4px] text-[14px] font-[500] text-center">Technology</p>
                    <h1 className="text-[36px] font-sans leading-[40px] font-[600] pr-[70px] pt-[20px]">Grid System For Better Design User Interface</h1>
                    <p className="text-[#97989F] pt-[20px]">August 20, 2022</p>
                </div>
            </section>
            <div className="flex gap-2 justify-end mt-3">
                <button><img src="./back.png" alt="" className="w-10 h-10"/></button>
                <button><img src="./forward.png" alt="" className="w-10 h-10"/></button>
            </div>

            <section className="mt-24">
                <h1 className="text-[24px] font-bold mb-6 font-sans">Trending</h1>
                <div className="grid grid-cols-4 gap-4 relative">
                    <div className="w-[289px] h-[320px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                        <img src="https://via.placeholder.com/289x320" alt="Placeholder 1" className="w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#595959] to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white border-collapse rounded-[6px] bg-[#4B6BFB] w-[86px] px-[10px] py-[4px] text-[12px] font-[500] text-center ml-[10px] mb-[10px]">Technology</p>
                            <p className="font-sans font-[600] text-[18px] leading-[28px] text-white px-[10px] py-[5px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                        </div>
                    </div>
                    <div className="w-[289px] h-[320px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                        <img src="https://via.placeholder.com/289x320" alt="Placeholder 2" className="w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#595959] to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white border-collapse rounded-[6px] bg-[#4B6BFB] w-[86px] px-[10px] py-[4px] text-[12px] font-[500] text-center ml-[10px] mb-[10px]">Technology</p>
                            <p className="font-sans font-[600] text-[18px] leading-[28px] text-white px-[10px] py-[5px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                        </div>
                    </div>
                    <div className="w-[289px] h-[320px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                        <img src="https://via.placeholder.com/289x320" alt="Placeholder 3" className="w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#595959] to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white border-collapse rounded-[6px] bg-[#4B6BFB] w-[86px] px-[10px] py-[4px] text-[12px] font-[500] text-center ml-[10px] mb-[10px]">Technology</p>
                            <p className="font-sans font-[600] text-[18px] leading-[28px] text-white px-[10px] py-[5px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                        </div>
                    </div>
                    <div className="w-[289px] h-[320px] bg-gray-300 rounded-[12px] overflow-hidden relative">
                        <img src="https://via.placeholder.com/289x320" alt="Placeholder 4" className="w-full h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#595959] to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <p className="text-white border-collapse rounded-[6px] bg-[#4B6BFB] w-[86px] px-[10px] py-[4px] text-[12px] font-[500] text-center ml-[10px] mb-[10px]">Technology</p>
                            <p className="font-sans font-[600] text-[18px] leading-[28px] text-white px-[10px] py-[5px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between h-[100px] px-[18%]">
                <button><img src="./Logo.png" alt="" className="w-[158px] h-[36px]"/></button>
                <div className="flex justify-between gap-[40px] text-customText text-[17px] leading-[24px] font-[400] font-sans">
                    <button>Home</button>
                    <button>Blog</button>
                    <button>Contact</button>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search" className="pr-10 h-[36px] w-[166px] bg-[#F4F4F5] pl-[15px]" />
                    <img src="./search-outline.png" alt="search icon" className="w-[16px] h-[16px] absolute right-3 top-1/2 transform -translate-y-1/2"/>
                </div>

            </header>
        </div>
    
    );
  };
export const Footer = () => {
    return (
        <footer className="h-[495px] bg-[#F6F6F7] px-[15%] pt-[64px]  bottom-0 w-full">
            <div className=" flex gap-[30%]">
                <div className="w-[289px]">
                    <h2 className="font-[600] text-[18px] leading-[28px] pb-[20px]">About</h2>
                    <p className="text-footerP">Lorem ipsum dolor sit amet consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                       <div className="flex pt-[20px] gap-[10px] text-customText">
                           <h3>Email:</h3>
                           <p> info@jstemplate.net</p>
                       </div>
                       <div className="flex gap-[10px]">
                            <h3>Phone:</h3>
                            <p>880 123 456 789</p>
                       </div>
                    
                </div>
                <div className="text-customText leading-[34px]">
                        <ul><a href="http://localhost:3000"><button>Home</button></a></ul>
                        <ul><a href="http://localhost:3000/allBlog"><button>Blog</button></a></ul>
                        <ul><a href="http://localhost:3000/contact"><button>Contact</button></a></ul>
                </div>
                <div className="w-[16px] h-[16px] flex gap-[20px]">
                    <img src="./Facebook.png" alt="" />
                    <img src="./Twitter.png" alt="" />
                    <img src="./Instagram.png" alt="" />
                    <img src="./LinkedIn.png" alt="" />
                </div>
            </div>
                
                <div className="my-4 h-px bg-gray-300 mt-[40px]" />

                <div className="flex justify-between">
                    <img src="./footerLogo.png" alt="" className="w-[231px] h-[54px]"/>
                    <div className="flex font-sans text-customText pt-[10px] gap-[15px]">
                        <button>Terms of Use</button>
                        <div className="w-px h-8 bg-gray-300 mx-2" />
                        <button>Privacy Policy</button>
                        <div className="w-px h-8 bg-gray-300 mx-2" />
                        <button>Cookie Policy</button>
                    </div>
                </div>
        </footer>
  
    );
}
"use client";

const LeaveMessage = () => {
    return (
        <div className="w-[614px] h-[440px] bg-[#F6F6F7] rounded-xl mt-[50px]">
            <div className="pl-9 pt-7">
               <h1 className="text-lg font-semibold font-sans mb-6">Leave a message</h1>
               <div className="flex gap-7 mb-5">
                    <input type="text" placeholder="Your Name" className="border rounded-[5px] border-[#DCDDDF] w-[225px] h-[38px] pl-5"/>
                    <input type="text" placeholder="Your Email" className="border rounded-[5px] border-[#DCDDDF] w-[225px] h-[38px] pl-5" />
                </div>
                <div className="block mb-5">
                    <input type="text" placeholder="Subject" className="border rounded-[5px] border-[#DCDDDF] w-[478px] h-[35px] pl-5"/>
                </div>
                <div>
                    <textarea type="text" placeholder="Write a Feedback" className="border rounded-[5px] border-[#DCDDDF] w-[478px] h-[134px] pl-5 pt-4 resize-none"/>
                </div> 
                <button className="text-sm font-medium text-white items-center font-sans border w-[130px] h-10 bg-[#4B6BFB] rounded-md mt-7">Send Message</button>
            </div>
        </div>
    );
};

export default LeaveMessage;
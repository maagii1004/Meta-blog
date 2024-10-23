"use client";

import { AllBlogCard } from "./AllBlogCard";

export const HomeB = async () => {
    const response = await fetch("https://next-mock-api.vercel.app/api/posts?size=9");
    const data = await response.json();
    const { items: posts } = data;

    return (
        <div className="flex justify-center max-w-[1216px]">
            <section className="mt-40 ">
                <h1 className="text-[24px] font-bold mb-6 font-sans">All Blog Posts</h1>
                <div className="font-bold font-sans text-lg text-[#495057] flex justify-between">
                    <div className="flex gap-6 leading-6">
                        <button className="hover:text-[#D4A373] text-[12px]">All</button>
                        <button className="hover:text-[#D4A373] text-[12px]">Design</button>
                        <button className="hover:text-[#D4A373] text-[12px]">Travel</button>
                        <button className="hover:text-[#D4A373] text-[12px]">Fashion</button>
                        <button className="hover:text-[#D4A373] text-[12px]">Technology</button>
                        <button className="hover:text-[#D4A373] text-[12px]">Branding</button>
                    </div>
                    <div>
                        <a href="http://localhost:3000/allBlog"><button className="hover:text-[#D4A373] text-[12px]">View All</button></a>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6 ">
                    {posts.map((post) => (
                        <AllBlogCard key={post.id} post={post} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="border-[1px] border-x-gray-400 rounded-[5px] text-[#696A75] font-sans font-[500] w-22 h-9 p-5 items-center text-center flex justify-center my-9">Load More</button>
                </div>
            </section>
        </div>
    );
}

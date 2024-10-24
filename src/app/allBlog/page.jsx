"use client";

import { AllBlogCard } from "../components/AllBlogCard";
import Link from "next/link";

export const Page = async () => {
    const response = await fetch(`https://next-mock-api.vercel.app/api/posts?size=12`);
    const data = await response.json();
    const { items: posts } = data; // Get the posts from the API response

    return (
        <div className="flex justify-center max-w-[1216px] m-auto">
            <section>
                <h1 className="text-2xl font-bold mb-6 font-sans my-12">All Blog Posts</h1>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {posts.map((post) => (
                        <Link className="block" href={`/blog/${post.id}`} key={post.id}>
                            <AllBlogCard post={post} />
                        </Link>       
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="border-[1px] border-x-gray-400 rounded-[5px] text-[#696A75] font-sans font-[500] w-22 h-9 p-5 items-center text-center flex justify-center my-9">Load More</button>
                </div>
            </section>
        </div>
    );
}

export default Page;


import dayjs from 'dayjs';

export const AllBlogCard = ({ post }) => {
    return (
        <div className="w-[392px] h-[488px] border border-[#E8E8EA] rounded-lg overflow-hidden hover:cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={post.image} alt={post.title} className="w-[360px] h-[240px] border rounded-md mx-auto mt-3" />
            <div className="inline-block h-7 rounded-md border border-collapse bg-[#4B6BFB0D] text-[#4B6BFB] px-[10px] py-1 font-medium font-sans text-sm ml-7 mt-6">
                {post.categories.join(", ")}
            </div>
            <div className="p-4">
                <p className="text-[#181A2A] mt-1 font-semibold font-sans text-xl pl-3">{post.title}</p>
            </div>
            <div className="flex items-center gap-3 ml-3.5 mt-5 pb-0 align-bottom">
                <img src={post.authorImage} alt={post.authorName} className="w-9 h-9 rounded-[28px]" />
                <p className="font-sans font-medium text-[#97989F] text-base">{post.authorName}</p>
                {/* August 20, 2022 */}
                <p className='text-[#97989F]'>{dayjs(post.createdAt).format("MMMM DD, YYYY")}</p>
            </div>
        </div>
    );
}

import dayjs from "dayjs";
import { notFound } from "next/navigation";
import Image from "next/image";

import "./content.css";

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const post = await fetch(`https://next-mock-api.vercel.app/api/posts/${id}`).then((res) => res.json());

  return {
    title: post.title,
    openGraph: {
      image: "https://images3.alphacoders.com/132/1328547.png",
    },
  };
}

const ArticleRead = async ({ params }) => {
  const { id } = params;

  const response = await fetch("https://next-mock-api.vercel.app/api/posts/" + id);
  if (response.status === 404) return notFound();
  const post = await response.json();

  return (
    <section className="container block justify-center">
      <h1 className="font-semibold text-4xl font-sans mb-5">{post.title}</h1>
      <div className="flex items-center gap-5 mb-8">
        <div className="flex items-center gap-3">
          <img alt={post.authorName} src={post.authorImage} width={36} height={36} className="object-cover rounded-full aspect-square" />
          <p className="text-[#97989F] font-medium">{post.authorName}</p>
        </div>
        <p className="text-[#97989F]">{dayjs(post.createdAt).format("MMMM DD, YYYY")}</p>
      </div>
      <img src={post.image} width={800} height={462} alt="" className="rounded-xl" />

      <div className="content w-[800px] h-[462px] rounded-xl text-xl font-normal font-serif" dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  );
};

export default ArticleRead;
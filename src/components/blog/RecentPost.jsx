"use client"
import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "@/src/hooks"; // Custom hook for fetching blogs

const RecentPost = () => {
  const { blogs, isLoading, isError } = useBlogs({ searchQuery: "", page: 1 });

  // Slice the first 3 blogs to show as recent posts
  const recentPosts = blogs ? blogs.slice(0, 3) : [];
  console.log(blogs)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching recent posts</p>;

  return (
    <>
      {recentPosts.map((post) => (
        <div
          className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
          key={post.id}
        >
          <div>
            <Image
              width={80}
              height={90}
              src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${post.image}`} // Use NEXT_PUBLIC_ prefix
              alt={post.title}
              className="lazy-img"
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <Link href={`/blog/${post.id}`} className="title tran3s">
                {post.title}
              </Link>
            </h4>
            <div className="date">{post.date}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;

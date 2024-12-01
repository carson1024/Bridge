'use client'
import Link from "next/link";
import Image from "next/image";

const Blog1 = ({ blogs }) => {
  console.log('the blogs:', blogs)
  return (
    <>
      {blogs.map((blog) => (
        <article
          className={`blog-meta-three mb-80 lg-mb-40`}
          key={blog.id}
          data-aos="fade-up"
        >
          {blog.image && (
            <figure className="post-img m0">
              <Link href={`/blog/${blog.id}`} className="w-100 d-block">
                <Image
                  width={800}
                  height={450}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${blog.image}`} // Use NEXT_PUBLIC_ prefix
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
          )}
          <div className="post-data mt-40 lg-mt-30">
            <div className="post-date opacity-75 text-uppercase">
              {blog.date}
            </div>
            <Link href={`/blog/${blog.id}`} className="mt-10 mb-25 lg-mb-20">
              <h4 className="tran3s blog-title xl tx-dark">{blog.title}</h4>
            </Link>
            <div>
              <Link
                href={`/blog/${blog.id}`}
                className="read-btn-two fw-500 tran3s"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Blog1;

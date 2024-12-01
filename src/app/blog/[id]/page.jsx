'use client'
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import SearchBox from "@/src/components/blog/SearchBox";
import Category from "@/src/components/blog/Category";
import RecentPost from "@/src/components/blog/RecentPost";
import BannerPost from "@/src/components/blog/BannerPost";
import Tag from "@/src/components/blog/blog-details/Tag";
import SocialShare from "@/src/components/blog/blog-details/SocialShare";
import SingleComments from "@/src/components/blog/blog-details/SingleComments";
import CommentBox from "@/src/components/blog/blog-details/CommentBox";
import Link from "next/link";
import blogsData from "@/src/data/blog";
import Image from "next/image";
import { useBlogs } from "@/src/hooks";
import { useState } from "react";


const DynamicBlogDetails = ({ params }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {blogs} = useBlogs({ searchQuery: searchTerm, page: currentPage });
  const id = params.id;
  console.log('The blogs:', blogs);
  const blog = blogs?.find((item) => item.id == id) || blogsData[0];
  const createdAt = new Date(blog.created_at);

  const formattedDate = createdAt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", // 'short' gives abbreviated month (e.g., Sep)
    year: "numeric"
  });
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                Posted in {formattedDate}
               
              </p>
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.image && (
                      <Image
                        width={816}
                        height={597}
                        layout="responsive"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${blog.image}`} // Use NEXT_PUBLIC_ prefix
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                     <h4>
                    {blog.short_description}
                    </h4>
                    <p>
                    {blog.full_article}
                    </p>
                   
                   
                    
                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                    {/** <Tag /> */} 
                   {/** <SocialShare />*/}   
                    </div>
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}

                  {/* <div className="blog-comment-area">
                    <h3 className="blog-inner-title tx-dark pb-15">
                      2 Comments
                    </h3>
                    <SingleComments />
                  </div> */}
                  {/* /.blog-comment-area */}

                  {/* <div className="blog-comment-form">
                    <h3 className="blog-inner-title tx-dark">
                      Leave A Comment
                    </h3>
                    <p>
                      <Link href="/login" className="text-decoration-underline">
                        Sign
                      </Link>
                      in to post your comment or signup if you dont have any
                      account.
                    </p>
                    <CommentBox />
                  </div> */}
                  {/* /.blog-comment-form */}
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                  {/*<SearchBox />*/}  
                  </div>
                  {/* /.blog-sidebar-search */}

               <div className="blog-sidebar-category mb-60 md-mb-50">  
              {/**  <h4 className="sidebar-title">Category</h4>*/}     
                  
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}

                  {/* <BannerPost /> */}
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;

"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import RecentPost from "@/src/components/blog/RecentPost";
import Image from "next/image";
import { useBlogs } from "@/src/hooks";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const DynamicBlogDetails = ({ params }) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { blogs } = useBlogs({ searchQuery: searchTerm, page: currentPage });
  const id = params.id;
  const blog = blogs?.find((item) => item.id == id) || {};
  const createdAt = new Date(blog.created_at);

  const formattedDate = createdAt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      {/* =============================================
      Theme Default Menu
      ============================================== */}
      <DefaulHeader />

      {/* =============================================
      Feature Section Fifty One
      ============================================== */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                {t("posted_in")} {formattedDate}
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

      {/* =============================================
      Blog Section Five
      ============================================== */}
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
                        src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${blog.image}`}
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                    <h4>{blog.short_description}</h4>
                    <p>{blog.full_article}</p>

                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      {/* Additional components like Tag or SocialShare can go here */}
                    </div>
                  </article>
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">{t("recent_news")}</h4>
                    <RecentPost />
                  </div>
                </div>
              </div>
              {/* End .col-lg-4 */}
            </div>
          </div>
        </div>
      </div>

      {/* =============================================
      Footer Section
      ============================================== */}
      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;

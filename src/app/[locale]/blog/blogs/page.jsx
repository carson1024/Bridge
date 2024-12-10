'use client'; // Make sure this is a client component

import { useState, useEffect } from "react";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Blog1 from "@/src/components/blog/Blog1";
import Pagination from "@/src/components/blog/Pagination";
import SearchBox from "@/src/components/blog/SearchBox";
import RecentPost from "@/src/components/blog/RecentPost";
import { useBlogs } from "@/src/hooks"; // Custom hook for fetching blogs

const ListWithSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { blogs, total, isLoading, isError } = useBlogs({ searchQuery: searchTerm, page: currentPage }); // Correctly passing an object

  useEffect(() => {
    // Reset to the first page when the search term changes
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (query) => {
    setSearchTerm(query); // Update search term from the SearchBox
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update the current page for pagination
  };

  return (
    <>
      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  News
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Check our inside news &amp; updates.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : isError ? (
                    <p>Error fetching blogs</p>
                  ) : (
                    <Blog1 blogs={blogs} /> // Pass blogs directly
                  )}
                </div>

                <div className="page-pagination-one pt-15">
                  <Pagination
                    total={total}
                    perPage={10} // Same as limit in the backend
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox onSearch={handleSearch} />
                  </div>

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default ListWithSidebar;

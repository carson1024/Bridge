"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Faq from "@/src/components/home-page/home-2/Faq";
import Link from "next/link";
import Social from "@/src/components/service-details/Social";
import { useServiceById } from "@/src/hooks";
import ServiceSidebar from "@/src/components/common/ServiceSidebar";
import { useSearchParams } from "next/navigation";
import SpinnerShow from "@/src/components/common/SpinnerShow";
import Partner from "@/src/components/feature-sass/Partner";

const PortfolioV1 = () => {
  const router = useSearchParams();
  const id = router.get("id"); // Get service ID from the URL
  const { service, isLoading, isError } = useServiceById(id); // Fetch service data
  console.log(service);
  if (isLoading) {
    return <SpinnerShow />;
  }

  if (isError) {
    return <p>Error loading service details.</p>;
  }

  if (!service) {
    return <p>No service found.</p>;
  }

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
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Service Details
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We Provide Qulaity Services.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">
                  {service.service_name}
                </h2>
                <p className="text-lg tx-dark"></p>
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${service.image}`} // Use NEXT_PUBLIC_ prefix
                  alt="media"
                  className="main-img-meta"
                />
                <p>{service.description}</p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Our Goal</h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>Various analysis options.</li>
                        <li>Page Load (time, number of requests).</li>
                        <li>Big data analysis.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">The Challange</h4>
                      <p className="pe-xxl-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas interdum, orci at dapibus, massa ante pharetra
                        tellus. Maecenas interdum, orci at euismod dapibus.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq />
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <ServiceSidebar />
                {/* /.service-category */}

                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                    Bridge International takes studying abroad into another
                    dimension
                  </p>
                  <div className="name">- CEO</div>
                </div>
                {/* /.sidebar-quote */}
                <h4 className="tx-dark mb-15">Share it.</h4>
                <Social />
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Need Consultation ?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;

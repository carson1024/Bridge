import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Service1 from "@/src/components/services/Service1";
import Faq from "@/src/components/services/Faq";
import Partners from "@/src/components/services/Partners";
import Link from "next/link";

export const metadata = {
  title: "Service",
};

const ServiceV1 = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <DefaulHeader />
      
      {/* Our Services Section */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Our Services
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Our Provided Services.
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-xxl-5">
            <Service1 />
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="icon"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* Feedback Section */}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Do you have more question about our solution? Just send us a
                  message for help
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/page-menu/about-us" className="fw-500 tran3s">
                    More About Bridge
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>

        <div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>Partners</span>
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Short Banner */}
      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80" data-aos="fade-up">
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
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default ServiceV1;
"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Faq from "@/src/components/services/Faq";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUniversities } from "@/src/hooks";
import SpinnerShow from "@/src/components/common/SpinnerShow";

const UniversitiesList = () => {
  const router = useSearchParams();
  const country = router.get("country");
  const { universities, isLoading, isError } = useUniversities(country);
  // console.log("The universities: ", universities);

  if (isLoading) {
    return <SpinnerShow />;
  }

  if (isError) {
    return <p>Error loading university details.</p>;
  }

  if (!universities) {
    return <p>No university found.</p>;
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
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  The Universities
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Our {country} universities.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5">
            {universities?.length > 0 ? (
              universities.map((university) => (
                <div className="col-xl-4 col-sm-6" key={university.id}>
                  <div className="card-style-sixteen tran3s text-center position-relative mt-30">
                    <div className="image">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${university.Images}`} // Use NEXT_PUBLIC_ prefix
                        alt={university.name}
                        className="lazy-img m-auto"
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          width: "auto",
                          height: "150px",
                        }}
                      />
                    </div>
                    <h4 className="tx-dark">
                      {university.name || "No name available"}
                    </h4>
                    <Link
                      href={`/pages-menu/university-details?university=${university.name}`} // Send the service ID as a query parameter
                      className="read-more rounded-circle text-start tran3s"
                    >
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No universities available.</p> // Show a message if there are no services
            )}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="icon"
          className="lazy-img shapes shape-two"
        />
      </div>
      

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
      <DefaultFooter />
    </>
  );
};

export default UniversitiesList;

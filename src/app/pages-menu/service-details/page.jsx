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
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const router = useSearchParams();
  const id = router.get("id"); // Get service ID from the URL
  const { service, isLoading, isError } = useServiceById(id); // Fetch service data

  if (isLoading) {
    return <SpinnerShow />;
  }

  if (isError) {
    return <p>{t("error_loading_service_details")}</p>;
  }

  if (!service) {
    return <p>{t("no_service_found")}</p>;
  }

  return (
    <>
      <DefaulHeader />

      {/* Feature Section */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  {t("service_details")}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t("we_provide_quality_services")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt={t("shape")}
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt={t("shape")}
          className="lazy-img shapes shape-three"
        />
      </div>

      {/* Service Details */}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">
                  {service.service_name}
                </h2>
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${service.image}`}
                  alt={t("media")}
                  className="main-img-meta"
                />
                <p>{service.description}</p>

                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">{t("our_goal")}</h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>{t("various_analysis_options")}</li>
                        <li>{t("page_load_analysis")}</li>
                        <li>{t("big_data_analysis")}</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">{t("the_challenge")}</h4>
                      <p className="pe-xxl-5">
                        {t("challenge_description")}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  {t("any_questions_find_here")}
                </h3>
                <Faq />
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <ServiceSidebar />
                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt={t("icon")}
                    className="m-auto"
                  />
                  <p className="fw-500">{t("bridge_international_message")}</p>
                  <div className="name">- {t("ceo")}</div>
                </div>
                <h4 className="tx-dark mb-15">{t("share_it")}</h4>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
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
                        {t("need_consultation")}
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        {t("dont_hesitate_message")}
                      </h2>
                    </div>
                  </div>

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      {t("get_started_today")}
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

export default ServiceDetails;

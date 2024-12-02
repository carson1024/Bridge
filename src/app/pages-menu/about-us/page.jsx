"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Partners from "@/src/components/services/Partners";
import Team3 from "@/src/components/team/Team3";
import Link from "next/link";
import TextVideoBlock from "@/src/components/about/TextVideoBlock";
import { useTranslation } from 'react-i18next';

export const metadata = {
  title: "About Us",
};

const AboutUsV1 = () => {
  const { t } = useTranslation();

  const features = [
    { text: t("amazing_communication") },
    { text: t("best_trending_design") },
    { text: t("email_live_chat") },
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
      {/* =============================================
      Theme Default Menu
      ============================================== */}
      <DefaulHeader />

      {/* =============================================
      Feature Section Fifty Two
      ============================================== */}
      <TextVideoBlock />

      {/* =============================================
      Team Section Two
      ============================================== */}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">{t("our_team")}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Team3 />
            </div>
            <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              {
                t.rich('our_staff', {
                  count: (chunks) => <span className='text-decoration-underline fw-500'> 50+ </span>
                })
              }
            </p>
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                {t("view_full_team")}
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div>

      {/* =============================================
      Partner Section
      ============================================== */}
      <div className="partner-section-six position-relative mt-130 lg-mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                <span>{t("partners")}</span>
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

      {/* =============================================
      Short Banner Section
      ============================================== */}
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
                        {t("dont_hesitate_to_message")}
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

      {/* =============================================
      Footer Section
      ============================================== */}
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;

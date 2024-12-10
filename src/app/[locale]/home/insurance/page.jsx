import Link from "next/link";
import Partner from "@/src/components/feature-sass/Partner";

import Footer from "@/src/components/footer/Footer";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import Block from "@/src/components/home-page/home-1/Block";
import Blog from "@/src/components/home-page/home-1/Blog";
import ContactForm from "@/src/components/home-page/home-1/ContactForm";
import Feature from "@/src/components/home-page/home-1/Feature";
import Hero from "@/src/components/home-page/home-1/Hero";
import Service from "@/src/components/home-page/home-1/Service";
import Testimonial from "@/src/components/home-page/home-1/Testimonial";
import WhyChoose from "@/src/components/home-page/home-1/WhyChoose";
import Counter from "@/src/components/home-page/home-4/Counter";

import { useTranslations } from "next-intl";

export const metadata = {
  title: "Insurance",
};

const Insurance = () => {
  const t = useTranslations("Insurance");

  return (
    <>
      <DefaulHeader />
      <Hero />
      <div className="container">
        <Counter />
      </div>

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">{t("our_history_goal")}</h6>
                <p className="text-lg tx-dark">{t("bridge_history_description")}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
              <h2>{t("how_it_works")}</h2>
            </div>
            <Feature />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {t("discover_services")}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/services"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                {t("view_all_services")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">{t("why_choose_us")}</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    {t("what_makes_us_best")}
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div>

      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">
              {t("client_feedback")}
            </h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>
        </div>
      </div>

      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">{t("bridge_news")}</h2>
                </div>
              </div>
            </div>
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            <div
              className="partner-section-six mt-80 mb-225 lg-mt-60 lg-mb-200 md-mb-120"
              data-aos="fade-up"
            >
              <div
                className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                data-aos="fade-right"
              >
                <h4 className="main-title fw-500 tx-dark m0">{t("partners")}</h4>
              </div>
              <div className="container">
                <div className="wrapper">
                  <div className="partner_slider_one">
                    <Partner />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blogs"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                {t("go_to_news")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/bridge-logo.png" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  {t("footer_description")}
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {t("footer_rights")}
                </p>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Insurance;

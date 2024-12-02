"use client";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import FaqAccordion from "@/src/components/faqs/FaqAccordion";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

// export const metadata = {
//   title: "Faq's",
// };

const Faq = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* =============================================
      Theme Default Menu
      ============================================== */}
      <DefaulHeader />

      {/* =============================================
      Feature Section Fifty One
      ============================================== */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  {t("faq")}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t("questions_and_answers")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* =============================================
      Feature Section Thirty Three
      ============================================== */}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className="bg-wrapper position-relative" data-aos="fade-up">
              <FaqAccordion />
              <img
                src="/images/shape/shape_133.svg"
                alt={t("shape")}
                className="lazy-img shapes shape-one"
              />
            </div>

            <div className="text-center mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">{t("didnt_get_answer")}</h3>
              <Link href="/contact/contact" className="btn-twentyOne fw-500 tran3s">
                {t("contact_us")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================
      Contact Section One
      ============================================== */}
      <DefaultFooter />
    </>
  );
};

export default Faq;

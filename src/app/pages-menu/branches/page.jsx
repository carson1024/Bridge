"use client";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import Leads from "@/src/components/home-page/home-13/Leads";
import { useTranslation } from 'react-i18next';

// export const metadata = {
//   title: "Branches",
// };

const Branches = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* =============================================
      Theme Default Menu
      ============================================== */}
      <DefaulHeader />

      {/* =============================================
      Feature Section Thirty One
      ============================================== */}
      <div className="fancy-feature-thirtyOne position-relative bg-white zn2 pt-225 pb-140 lg-pt-200 lg-pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  <span className="position-relative">
                    {t("branches")}
                    <img src="/images/shape/shape_122.svg" alt={t("icon_shape")} />
                  </span>
                </h2>
                <p className="fs-20 mt-20">{t("our_branches")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Leads />
          </div>
        </div>
        <img
          src="/images/shape/shape_124.svg"
          alt={t("icon_shape")}
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_125.svg"
          alt={t("icon_shape")}
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* =============================================
      Footer Section
      ============================================== */}
      <DefaultFooter />
      <div className="shapes shape-one" />
      <img
        src="/images/shape/shape_134.svg"
        alt={t("shape")}
        className="lazy-img shapes shape-two"
      />
    </>
  );
};

export default Branches;

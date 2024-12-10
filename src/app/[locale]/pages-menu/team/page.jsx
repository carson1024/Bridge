import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Team1 from "@/src/components/team/Team1";
import CallToAction from "@/src/components/team/CallToAction";
 // Assuming next-i18next for translation
import { useTranslations } from "next-intl";

const TeamV1 = () => {
  const t = useTranslations("Team");

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
                  {t("our_team")}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t("qualified_team")}
                </h2>
              </div>
            </div>
          </div>
        </div>

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

      {/* Team Section */}
      <div className="team-section-two mt-20">
        <div className="container">
          <div className="wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row">
              <Team1 />
            </div>

            <CallToAction />
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default TeamV1;

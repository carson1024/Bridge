'use client';
import DefaulHeader from "@/src/components/header/DefaulHeader";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUniversities } from "@/src/hooks";
import SpinnerShow from "@/src/components/common/SpinnerShow";
import { useTranslation } from 'react-i18next'; // Assuming next-i18next for translations

const UniversitiesList = () => {
  const { t } = useTranslation();
  const router = useSearchParams();
  const country = router.get("country");
  const { universities, isLoading, isError } = useUniversities(country);

  if (isLoading) {
    return <SpinnerShow />;
  }

  if (isError) {
    return <p>{t("error_loading_university")}</p>;
  }

  if (!universities) {
    return <p>{t("no_universities")}</p>;
  }

  return (
    <>
      <DefaulHeader />

      {/* Feature Section */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {t("the_universities")}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t("our_country_universities", { country })}
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-xxl-5">
            {universities?.length > 0 ? (
              universities.map((university) => (
                <div className="col-xl-4 col-sm-6" key={university.id}>
                  <div className="card-style-sixteen tran3s text-center position-relative mt-30">
                    <div className="image">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${university.Images}`}
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
                      {university.name || t("no_name_available")}
                    </h4>
                    <Link
                      href={`/pages-menu/university-details?university=${university.name}`}
                      className="read-more rounded-circle text-start tran3s"
                    >
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>{t("no_universities")}</p>
            )}
          </div>
        </div>
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
                        {t("need_consultation")}
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        {t("dont_hear_send_message")}
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

export default UniversitiesList;

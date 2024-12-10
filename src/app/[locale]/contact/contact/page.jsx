import BlockContact from "@/src/components/contact/BlockContact";
import ContactForm from "@/src/components/contact/ContactForm";
import Map from "@/src/components/contact/Map";
import DefaultFooter from "@/src/components/footer/DefaultFooter";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import { useTranslations } from "next-intl";


export const metadata = {
  title: "Contact",
};

const ContactV1 = () => {
  const t = useTranslations("ContactV1");

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
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  {t("contact_info")}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t("get_in_touch")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2
                className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40"
                data-aos="fade-up"
              >
                {t("any_question_send_us_message")}
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default ContactV1;
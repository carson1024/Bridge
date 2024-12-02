'use client';
import Link from "next/link";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import Image from "next/image";
import { useTranslation } from 'react-i18next'; // Assuming next-i18next for translations

export const metadata = {
  title: "404",
};

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <>
      <DefaulHeader />

      {/* Error Page */}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>{t("error_heading")}</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                {t("error_message")}
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                {t("back_to_home")}
              </Link>
            </div>
          </div>
          <Image
            width={800}
            height={522}
            src="/images/assets/ils_06.svg"
            alt=""
            className="m-auto"
          />
        </div>

        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
    </>
  );
};

export default Pricing;

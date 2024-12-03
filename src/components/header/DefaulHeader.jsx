"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const DefaulHeader = () => {
  const { i18n } = useTranslation();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/bridge-logo.png"
                alt="logo"
                width={150}
                height={120}
              />
            </Link>
          </div>
          <div className="right-widget ml-auto d-flex align-items-center order-lg-3">
         
            <Link
              href="/contact/contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Contact us
            </Link>
            <Link
              href="javscript:;"
              onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'ar' : 'en')}
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              { i18n.language.toUpperCase() }
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;

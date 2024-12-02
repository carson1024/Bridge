"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/src/components/common/ScrollTop";
import { I18nextProvider } from 'react-i18next';
import { dir } from "i18next";
import { useTranslation } from 'react-i18next';
import i18nConfig from '../i18n/config';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const locale = i18n.language; // Get the current language
  // Receive messages provided in `i18n/request.ts`
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang={locale} dir={ dir(locale) }>
      <body>
      <I18nextProvider i18n={i18nConfig}>
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </I18nextProvider>
      </body>
    </html>
  );
}

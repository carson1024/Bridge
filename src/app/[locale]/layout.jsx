import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import ScrollToTop from "@/src/components/common/ScrollTop";
import { routing } from '@/src/i18n/routing';
import BaseLayout from '@/src/components/BaseLayout';
import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/index.scss";
import { Suspense } from 'react';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function RootLayout({ children, params: {locale} }) {

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      <Suspense>
        {children}
      </Suspense>
    </BaseLayout>
  );
}

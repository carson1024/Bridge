"use client";

import { useEffect, useState, useTransition } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, redirect } from '@/src/i18n/routing';
import { useParams} from 'next/navigation';

import { useSiteInfo } from "@/src/hooks";
import { useLocale } from "next-intl";

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/bridgeuk",
  },
  {
    icon: "fab fa-twitter",
    href: "https://x.com/bridgeintedu",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://jo.linkedin.com/company/bridge-international-for-academic-services-jordan",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/bridge_jordan",
  },

];

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const DefaulHeader = () => {
  // const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const [navbar, setNavbar] = useState(false);
  const { site_info, isLoading } = useSiteInfo();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSwitchLocale = () => {
    startTransition(() => {
      const newLocale = locale == 'ar' ? 'en' : 'ar';
      router.replace({pathname, params}, {locale: newLocale});
      location.href = '/' + newLocale + pathname;
    });
  }

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
                src={ site_info && site_info.logo_image ? `${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${site_info.logo_image}` : "/images/logo/bridge-logo.png" }
                alt={ site_info && site_info.alt || "logo" }
                width={120}
                height={120}
                hidden={isLoading}
                className="max-h-full"
              />
            </Link>
          </div>
          <div className="right-widget order-lg-3">
            <div className="d-flex align-items-center">
              <div className="d-none d-xxl-block">
                <ul className="d-flex social-icon style-none" style={{ marginRight: '20px' }}>
                  {icons.map((icon, index) => (
                    <IconItem key={index} icon={icon.icon} href={icon.href} />
                  ))}
                </ul>
              </div>
              <Link
                href="/contact/contact"
                className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
              >
                Company Profile
              </Link>
              <Link
                href="#"
                onClick={() => handleSwitchLocale() }
                className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
                style={{ marginInlineStart: '10px' }}
              >
                { ( locale || 'en').toUpperCase() }
              </Link>
            </div>
          </div>
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;

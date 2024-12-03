"use client";

import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

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

const MainMenu = () => {
  const { i18n } = useTranslation();

  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/bridge-logo.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
            <a
              className={isActive("/") ? "nav-link active-menu" : "nav-link"}
              href="/"
            >
              Home
            </a>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item">
            <a
              className={
                isActive("/pages-menu/branches")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/pages-menu/branches"
            >
              Branches
            </a>
          </li>
          {/* End li (pages) */}

          <li className="nav-item">
            <a
              className={
                isActive("/pages-menu/services")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/pages-menu/services"
            >
              Services
            </a>
          </li>

          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <a
              className={
                isActive("/pages-menu/about-us")
                  ? "nav-link active-menu dropdown-toggle"
                  : "nav-link dropdown-toggle"
              }
              href="/pages-menu/about-us"
            >
              About us
            </a>
            <div className="dropdown-menu">
              <div>
                <a className="dropdown-item" href="/pages-menu/team">Team</a>
              </div>
              <div>
                <a className="dropdown-item" href="/blog/blogs">News</a>
              </div>
            </div>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <a
              className={
                isActive("/contact/contact")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/contact/contact"
            >
              Contact us
            </a>
          </li>
          {/* End li (contact) */}
          <li className="nav-item">
            <a
              className={
                isActive("/pages-menu/faq")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/pages-menu/faq"
            >
              FAQs
            </a>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact"
              className="btn-twentyOne fw-500 tran3s"
            >
              Company Profile
            </Link>
            <Link
              href="#"
              onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'ar' : 'en')}
              className="btn-twentyOne fw-500 tran3s"
              style={{ marginTop: '10px' }}
            >
              { i18n.language.toUpperCase() }
            </Link>
            <ul className="d-flex social-icon style-none mt-5" style={{ marginRight: '20px' }}>
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;

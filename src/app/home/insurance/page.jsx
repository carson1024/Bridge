import Link from "next/link";
import Partner from "@/src/components/feature-sass/Partner";

import Footer from "@/src/components/footer/Footer";
import DefaulHeader from "@/src/components/header/DefaulHeader";
import AppBanner from "@/src/components/home-page/home-1/AppBanner";
import Banner from "@/src/components/home-page/home-1/Banner";
import Block from "@/src/components/home-page/home-1/Block";
import Blog from "@/src/components/home-page/home-1/Blog";
import ContactForm from "@/src/components/home-page/home-1/ContactForm";
import Feature from "@/src/components/home-page/home-1/Feature";
import Hero from "@/src/components/home-page/home-1/Hero";
import Service from "@/src/components/home-page/home-1/Service";
import Testimonial from "@/src/components/home-page/home-1/Testimonial";
import WhyChoose from "@/src/components/home-page/home-1/WhyChoose";
import Counter from "@/src/components/home-page/home-4/Counter";

export const metadata = {
  title: "Insurance  ",
};
const Insurance = () => {
  return (
    <>
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
 <div className="container">
      
          <Counter />
        </div>

<div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our History &amp; Goal.</h6>
                <p className="text-lg tx-dark">
Bridge International for Academic Services is the top and the oldest choice for international education in Jordan demonstrating 29 years of consistent educational excellence. We guide students to achieve their academic dreams abroad in the UK, USA, Canada, Australia, New Zealand and all over Europe. We offer counseling for Foundation, Bachelor's, Master's, and PhD programs, to over 600 and continuously growing partners, esteemed universities, colleges, and language centers to ensure a perfect academic fit.
                </p>
                <div className="row">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      
      </div>

      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">

          <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
      <h2>How It Works </h2>
    </div>
          
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      
     
 {/* /.Bannnnnnnner */}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Discover all our Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}

            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/services"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View all Services
              </Link>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Why Choose Us</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    What makes us the best.
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>

          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
       {/*} <AppBanner />*/}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-three md-mb-40">
                      <ContactForm />
                    </div>
                    {/* /.form-style-two */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
       <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Bridge News</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* /.row */}
            <div
        className="partner-section-six mt-80 mb-225 lg-mt-60 lg-mb-200 md-mb-120"
        data-aos="fade-up"
      >
         <div className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h4 className="main-title fw-500 tx-dark m0">Partners</h4>
                </div>
        <div className="container">
          <div className="wrapper">
            <div className="partner_slider_one">
              <Partner />
            </div>
          </div>
        </div>
      </div>
            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blogs"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to News
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.blog-section-three */}
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/bridge-logo.png" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                We are highly respected by the world's top-ranking academic institutions and recognized as the global leader in its field.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  Bridge International for Academic Services 
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;

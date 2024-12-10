"use client";
import React from "react";
import FilterBox from "./FilterBox";
import Slider from "react-slick";
import { useSlider } from "@/src/hooks";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero1 = () => {
  const settings = {
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const { slider } = useSlider();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div
      className="hero-banner-ten position-relative zn2"
      style={{
        backgroundImage: 'url("/images/assets/bg-7.png")', // Set your background image here
        backgroundSize: "cover", // Ensure the background covers the entire area
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Avoid repeating the image
        minHeight: "100vh", // Set the height to cover the viewport
        paddingTop: "125px"
      }}
    >
      <Slider {...settings}>
        {
          (slider || []).map((data) => <Link href={data.link || 'javascript:;'} className="d-block">
            <div style={{width: '100%', height: 'calc(100vh - 350px)', position: 'relative'}}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${data.image}`}
                alt="logo"
                fill={true}
                layout='fill'
                objectFit='cover'
              />
              {/* <button 
                className="position-absolute z-1 btn-eight fw-500 tran3s"
                style={{
                  top: '40%',
                  left: '100px'
                }}
              >
                Call to action
              </button> */}
            </div>
          </Link>)
        }
      </Slider>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
          >
            {/* <h1 className="hero-heading fw-500 tx-dark">
              Let your <span>Dream</span>  Come True.
            </h1> */}
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Start your study journey through us!
            </p>
            <div className="search-form-bg position-relative">
              <FilterBox />
              {/* /.search-area */}
            </div>
            {/* End form */}
          </div>
        </div>
      </div>
      {/* End .container */}
    </div>
  );
};

export default Hero1;

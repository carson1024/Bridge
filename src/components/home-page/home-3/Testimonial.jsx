"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useTestimonials } from "@/src/hooks";

const Testimonial = () => {
  const { testimonials, isLoading, isError } = useTestimonials();

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonials?.map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven">
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="tx-dark m0">{item.Title}</h3>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <img src="/images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark">{item.Description}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.Name},{" "}
                  <span className="opacity-50 fw-normal">{item.Title}</span>
                </div>
                <Image
                  width={60}
                  height={60}
                  alt="testimonial avatar"
                  src={`${process.env.NEXT_PUBLIC_BACKEND_UPLOAD_URL}${item.Image}`} // Use NEXT_PUBLIC_ prefix
                  className="rounded-circle"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;

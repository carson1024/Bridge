"use client";

import { usePartners } from "@/src/hooks";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const { partners } = usePartners();

  return (
    <Slider {...settings} arrows={false}>
      {(partners || []).map((data, index) => (
        <div className="item" key={index}>
          <div className="icon d-flex align-items-center justify-content-center">
            <Link href={data.link || 'javascript:;'} className="d-block">
              <Image
                width={109}
                height={46}
                style={{ objectFit: "contain" }}
                src={data.logo}
                alt={data.alt || ""}
              />
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Partner;

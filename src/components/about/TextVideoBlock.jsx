"use client";

import { useAboutUs } from "@/src/hooks";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const TextVideoBlock = () => {
  const {about, isLoading, isError } = useAboutUs();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  More About us.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  { about?.header || '' }
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">{ about?.title || '' }</h6>
                <p className="text-lg tx-dark">
                    { about?.text_content || '' }
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
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={ about?.video_id || '' }
        onClose={() => setOpen(false)}
      />

      <div className="fancy-feature-fiftyTwo mt-130 lg-mt-100">
        <div className="container">
          <div className="video-banner d-flex align-items-center justify-content-center">
            <button
              className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/icon/icon_140.svg"
                alt="icon"
                className="lazy-img"
              />
            </button>
          </div>
          {/* /.video-banner */}
        </div>
      </div>
    </>
  );
};

export default TextVideoBlock;

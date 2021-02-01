import classNames from "classnames";
import React, { useState } from "react";

import { useContentful } from "../../contentful/useContentful";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const { homepageData: data } = useContentful();
  console.log(data);

  console.log({ data });

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const welcomeTextArray = data && data["Welcome Text"].text.split(" ");
  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            {data && (
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                {data["Welcome Text"].text}{" "}
                <span className="text-color-primary">{data["Name"].text}</span>
              </h1>
            )}
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                dangerouslySetInnerHTML={{
                  __html: data["Welcome Tagline"].text,
                }}
              />
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            {/* <a
              data-video={data["Welcome Item"].link}
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            > */}
            <Image
              className="has-shadow"
              src={data["Welcome Item"].media.url}
              alt="Hero"
              width={896}
              height={504}
            />
            {/* </a> */}
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={data["Welcome Item"].link}
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

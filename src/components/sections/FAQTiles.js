import classNames from "classnames";
import React from "react";

import { useContentful } from "../../contentful/useContentful";
import { SectionTilesProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
export const FAQTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const { homepageData: data } = useContentful();

  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: data["FAQ Title"].text,
    paragraph: data["FAQ Subtext"].text,
  };

  const items = data["FAQ Item"];
  const sorteditems = items.sort((a, b) =>
    a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  );

  return (
    <section {...props} className={outerClasses} style={{ marginTop: 32 }}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            id="faq"
          />
          <div className={tilesClasses}>
            {sorteditems.map((i) => {
              return (
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <style jsx>{`
                        .features-tiles-item-image {
                          position: relative;
                          width: 64px;
                          height: 64px;
                        }
                        .features-tiles-item-image .circle {
                          position: absolute;
                          left: 0;
                          top: 0;
                          width: 100%;
                          height: 100%;
                          z-index: 1;
                        }
                        .features-tiles-item-image img:nth-last-child(1) {
                          z-index: 2;
                          width: 65%;
                          height: 65%;
                        }
                      `}</style>
                      <div className="features-tiles-item-image mb-16">
                        <img
                          src="/images/circle.svg"
                          alt="background-circle"
                          className="circle"
                        />

                        <img src={i.media.url} alt="Features tile icon 01" />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">{i.text}</h4>
                      <p className="m-0 text-sm">{i.subText}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id="faq"/>
          <div className={tilesClasses}>
            {sorteditems.map((i) => {
              return (
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={i.media.url}
                          alt="Features tile icon 01"
                          width={64}
                          height={64}
                          style={{padding: 12, ...(i.order === 1 ? {paddingTop: 22, paddingBottom: 22}: {})}}
                        />
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

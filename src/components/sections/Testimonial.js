import classNames from "classnames";
import React from "react";

import { useContentful } from "../../contentful/useContentful";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const itemDirection = ["right", "bottom", "left"];

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: data["Testimonial Title"].text,
    paragraph: data["Testimonial Subtext"].text,
  };
  const items = data["Testimonial Item"];
  const sorteditems = items.sort((a, b) =>
    a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {sorteditems.map((item, i) => {
              return (
                <div
                  className={`tiles-item reveal-from-${itemDirection[i]}`}
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">— {item.text}</p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        {item.attributionName}
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">
                        <a href="#0">{item.attriibutionContext}</a>
                      </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

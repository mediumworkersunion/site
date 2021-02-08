import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { useContentful } from "../../contentful/useContentful";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const itemDirection = ["right", "bottom", "left"];

const PressKit = ({
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
    "Testimonial section", // yes this should be Tesstimonial
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "Testimonial-inner section-inner", // yes this should be Tesstimonial
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: data["Press Title"].text,
    paragraph: "",
  };
  const items = data["Press Item"];
  const sorteditems = items.sort((a, b) =>
    a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  );
  console.log(data);

  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Image src={data["Press Subtext"].media.url} height="200px" />
      </div>
      <section {...props} className={outerClasses} id="presskit">
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div
              className={tilesClasses}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {sorteditems.map((item, i) => {
                console.log(item);
                return (
                  <>
                    <style jsx>{`
                      .tiles-item {
                        max-height: 50px !important;
                        width: 65% !important;
                        max-width: 65% !important;
                        min-width: 65% !important;
                        text-align: center;
                      }
                      @media screen and (max-device-width: 800px) {
                        .tiles-item {
                          max-height: 100px !important;
                          width: 100% !important;
                          max-width: 100% !important;
                          min-width: 100% !important;
                        }
                      }
                    `}</style>
                    <div
                      className={`tiles-item reveal-from-${itemDirection[i]}`}
                      data-reveal-delay="200"
                    >
                      <div
                        className="tiles-item-inner"
                        style={{
                          paddingTop: "8px !important",
                          paddingBottom: "8px !important",
                        }}
                      >
                        <div className="PressKit-item-content">
                          <p className="text-sm mb-0">
                            {item.text}{" "}
                            <Link href={item.link || (item.media && item.media.url) || "#"}>
                              {item.subText || "link"}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

PressKit.propTypes = propTypes;
PressKit.defaultProps = defaultProps;

export default PressKit;

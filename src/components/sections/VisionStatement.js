import classNames from "classnames";
import React from "react";

import { useContentful } from "../../contentful/useContentful";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

export const VisionStatement = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const { homepageData: data } = useContentful();

  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: data["Vision Statement Title"].text,
    paragraph: data["Vision Statement Subtext"].text,
  };

  const items = data["Vision Statement Item"];
  const sorteditems = items.sort((a, b) =>
    a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            leftAlign
            className="center-content"
            id="vision"
          />
          <div className={splitClasses}>
            {sorteditems.map((item, i) => {
              const direction = `row${i % 2 ? "-reverse" : ""}`;
              return (
                <>
                  <style jsx>{`
                    .sorted-item {
                      display: flex;
                      flex-direction: ${direction};
                      align-items: center;
                    }
                    @media screen and (max-device-width: 480px) {
                      .sorted-item {
                        flex-direction: column-reverse;
                        margin-bottom: 80px;
                      }
                      .sorted-item-title {
                        font-size: 25px !important;
                        line-height: 30px !important;
                      }
                    }
                    .sorted-item-content {
                      flex: 1;
                    }
                    .sorted-item-image {
                      flex: 1;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                  `}</style>
                  <div className={"sorted-item"}>
                    <div className="sorted-item-content">
                      <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        {item.attriibutionContext}
                      </div>
                      <h3 className="sorted-item-title mt-0 mb-12">
                        {item.text}
                      </h3>
                      <p className="m-0">{item.subText}</p>
                    </div>
                    <div className="sorted-item-image">
                      {item.media && (
                        <Image
                          src={item.media.url}
                          alt={`Features split ${i}`}
                          style={{
                            filter: "sepia(100%) saturate(50%)",
                            height: "198px !important",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

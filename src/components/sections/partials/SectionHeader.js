import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  children: null,
  tag: "h2",
};

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  id,
  leftAlign,
  ...props
}) => {
  const classes = classNames("section-header", className);

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) && (
        <div {...props} className={classes}>
          <div className="container-md" id={id}>
            {children}
            <style jsx>{`
              .mt-0 {
              }
              @media screen and (max-device-width: 480px) {
                .mt-0 {
                  font-size: 30px !important;
                  font-weight: bold !important;
                }
              }
            `}</style>
            {data.title && (
              <Component
                className={classNames(
                  "mt-0",
                  data.paragraph ? "mb-16" : "mb-0"
                )}
              >
                {data.title}
              </Component>
            )}
            {data.paragraph && (
              <p
                className="m-0"
                style={{ ...(leftAlign ? { textAlign: "left" } : {}) }}
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;

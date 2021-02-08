import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { useContentful } from "../../../contentful/useContentful";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const { homepageData: data } = useContentful();

  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link href="/">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={data["Logo"].media.url}
              alt={data["Logo"].text}
              width={60}
              height={60}
            />

            {data["Name"].text.split(" ").map((word, i) => {
              return (
                <>
                  <span
                    className="text-h3"
                    style={{
                      marginLeft: "8px",
                      position: "relative",
                      top: 0,
                      fontFamily: "BebasNeue",
                      fontSize: "40px",
                      fontWeight: 400,
                      color: i === 1 ? "#d97f76" : "white",
                    }}
                  >
                    {word}
                  </span>{" "}
                </>
              );
            })}
          </div>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;

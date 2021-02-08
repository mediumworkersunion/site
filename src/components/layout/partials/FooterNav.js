import classNames from "classnames";
import Link from "next/link";
import React from "react";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link href="#vision">Our Vision</Link>
        </li>
        <li>
          <Link href="#faq">FAQs</Link>
        </li>
        <li>
          <Link href="#presskit">Press</Link>
        </li>
        <li>
          <Link
            href="#email"
            className="button button-primary button-wide-mobile button-sm"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;

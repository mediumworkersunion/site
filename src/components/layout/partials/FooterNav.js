import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { logEvent } from '../../../utils/analytics';

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link href="#vision" onClickCapture={()=> logEvent('footer link', 'vision')}>Our Vision</Link>
        </li>
        <li>
          <Link href="#faq" onClickCapture={()=> logEvent('footer link', 'faq')}>FAQs</Link>
        </li>
        <li>
          <Link href="#presskit" onClickCapture={()=> logEvent('footer link', 'presskit')}>Press</Link>
        </li>
        <li>
          <Link
            href="#email"
            className="button button-primary button-wide-mobile button-sm"
            onClickCapture={()=> logEvent('footer link', 'email')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;

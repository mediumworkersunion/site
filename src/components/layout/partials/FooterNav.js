import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link href="/#0">People</Link>
        </li>
        <li>
          <Link href="/#0">Power</Link>
        </li>
        <li>
          <Link href="/#0">Press</Link>
        </li>
        <li>
          <Link href="/#0">Join us!</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
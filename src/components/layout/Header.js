import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import Logo from './partials/Logo';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { logEvent } from '../../utils/analytics';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner">
        
                  </span>
                </span>
              </button>
              <style jsx>{`
                .mobile-menu {
                  display: ${isActive?'block':'none'};
                  position: fixed;
                  width: 100vw;
                  height: calc(100vh - 60px);
                  left: 0;
                  top: 60px;
                  background: #1f1313;
                  opacity: .95;
                }
                .mobile-menu ul {
                  display: flex;
                  flex-direction: column;
                  height:100%;
                  width: 100%;
                  align-items: center;
                }
                .mobile-menu li {
                  display: block;
                  width: 100%;
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  border-bottom: solid 1px #f6f4f4;
                }
                .mobile-menu li a {
                  display: block;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                }
                @media screen and (max-device-width: 640px){
                  .desktop-menu {
                    display: none;
                  }
                }
              `}</style>
              {isActive && <nav
                className="mobile-menu">
                <ul >
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault()
                      logEvent('mobile nav link', 'vision')
                      const vision = document.getElementById('vision')
                      vision.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                      setIsactive(false)
                      }}>Our Vision</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault()
                      logEvent('mobile nav link', 'faq')
                      const faq = document.getElementById('faq')
                      faq.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                      setIsactive(false)
                      
                      }}>FAQs</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault()
                      logEvent('mobile nav link', 'presskit')
                      const presskit = document.getElementById('presskit')
                      presskit.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                      setIsactive(false)
                      
                      }}>Press</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault()
                      logEvent('mobile nav link', 'email')
                      const email = document.getElementById('email')
                      email.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                      setIsactive(false)
                      
                      }}>Contact</a>
                  </li>
                </ul>
              </nav>}
              <nav
                ref={nav}
                className={
                  classNames(
                    'desktop-menu',
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link href="#vision" onClick={() => logEvent('nav link', 'vision')}>Our Vision</Link>
                    </li>
                    <li>
                      <Link href="#faq" onClick={() => logEvent('nav link', 'faq')}>FAQs</Link>
                    </li>
                    <li>
                      <Link href="#presskit" onClick={() => logEvent('nav link', 'presskit')}>Press</Link>
                    </li>
                    <li>
                      <Link href="#email" onClick={() => logEvent('nav link', 'email')} className="button button-primary button-wide-mobile button-sm">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

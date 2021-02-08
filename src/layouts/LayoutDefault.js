import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {initGA, logPageView} from '../utils/analytics'

const LayoutDefault = ({ children }) => {
  React.useLayoutEffect(()=> {
    console.log(process.env.NODE_ENV, process.browser)
    if (process.env.NODE_ENV !== "production" ||!process.browser) return
    console.log('should init')
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    console.log('should log')
    logPageView()
  }, [process.browser])
  return (<>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);
}

export default LayoutDefault;  
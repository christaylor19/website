import React from 'react';
import Router from 'next/router';
import * as gtag from '../utils/gtag';
import '../styles/index.css';

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;

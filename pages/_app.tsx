import '../styles/index.css';

import Router from 'next/router';
import React from 'react';

import ModeContextProvider from '../context/appContext';
import * as gtag from '../utils/gtag';

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

  return (
    <ModeContextProvider>
      <Component {...pageProps} />
    </ModeContextProvider>
  );
};

export default App;

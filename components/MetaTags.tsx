import Head from 'next/head';
import React from 'react';

const MetaTags: React.FC = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <title>{'Chris Taylor'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preload" href="/fonts/CascadiaCode.woff2" as="font" type="font/woff2" />
    </Head>
  );
};

export default MetaTags;

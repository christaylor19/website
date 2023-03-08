import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => (
  <Html lang="en">
    <Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-174989363-1`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-174989363-1', {
      page_path: window.location.pathname,
    });
  `,
        }}
      />
    </Head>
    <body className="bg-white dark:bg-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

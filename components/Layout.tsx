import React from 'react';

import MetaTags from './MetaTags';
import Footer from './nav/Footer';
import Header from './nav/Header';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const Layout: React.FC<Props> = ({ children, pathname }): React.ReactElement => {
  return (
    <>
      <MetaTags />
      <div className="flex flex-row h-screen justify-center">
        <div className="flex flex-col md:max-w-3xl lg:max-w-4xl xl:w-3/4">
          <Header pathname={pathname} />
          <main className=" h-full py-6 text-center flex-grow flex flex-row  justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Rubik, Roboto, sans-serif, 'Arial';
            margin: 0;
          }
          @font-face {
            font-family: Varela;
            src: url('fonts/Varela/Varela-Regular.ttf');
            font-display: swap;
          }
          @font-face {
            font-family: Rubik;
            src: url('fonts/Rubik/Rubik-VariableFont_wght.ttf');
          }
        `}
      </style>
    </>
  );
};

export default Layout;

import { FC, ReactNode, useContext } from 'react';

import { ModeContext } from '../context/appContext';
import GlobalStyle from '../styles/global.style';
import MetaTags from './MetaTags';
import Footer from './nav/Footer';
import Header from './nav/Header';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <MetaTags />
      <div className={mode}>
        <div className={'flex flex-row h-screen justify-center  bg-gray-100 dark:bg-gray-900'}>
          <div className="flex flex-col xl:w-8/12">
            <Header />
            <main className="h-full py-6 text-center flex-grow flex flex-row  justify-center">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
};

export default Layout;

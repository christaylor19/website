import dayjs from 'dayjs';
import Head from 'next/head';
import React from 'react';
import { HiMenu } from 'react-icons/hi';

import links from '../data/links';
import pages from '../data/pages';
import NavLink from './NavLink';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const Layout: React.FC<Props> = ({ children, pathname }): React.ReactElement => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
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
      <div className="flex flex-row h-screen justify-center">
        <div className="flex flex-col md:max-w-3xl lg:max-w-4xl xl:w-3/4">
          <header>
            <nav className="flex flex-row items-center justify-center mt-8 ">
              <ul className="flex flex-row items-center break-all py-2 px-4 list-none w-full ">
                <li className="mr-2 p-0">
                  <span className="text-gray-800 dark:text-gray-200  font-semibold no-underline text-xl">
                    {'CHRIS TAYLOR'}
                  </span>
                </li>
                <li className="mx-2 p-0">
                  <NavLink displayName="home" pathname={pathname} href="/" />
                </li>
                {pages.map((page) => (
                  <li className="xxs:hidden md:block px-2 border-l-2 border-gray-400 dark:border-blue-900 leading-4">
                    <NavLink displayName={page.headerName} pathname={pathname} href={page.href} />
                  </li>
                ))}
                <li className="flex-grow" />
                {links.map((link) => (
                  <li className="mx-2 p-0 xxs:hidden xs:hidden sm:hidden md:hidden lg:block">
                    <a href={link.href}>
                      <link.Icon className="text-gray-500 hover:text-gray-900 h-5 w-5" />
                    </a>
                  </li>
                ))}
                <li className="relative mx-2 p-0 lg:hidden">
                  <HiMenu
                    className="text-gray-500 cursor-pointer hover:text-gray-900 h-5 w-5 "
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                  {menuOpen && (
                    <div className="absolute pt-2 text-right right-0 z-10">
                      <ul className="flex flex-col border-r-2 border-gray-400 dark:border-blue-900">
                        {pages.map((page) => (
                          <li
                            key={`${page.name}_menulink`}
                            className="xs:block sm:block md:hidden px-2  leading-4"
                          >
                            <NavLink
                              displayName={page.headerName}
                              pathname={pathname}
                              href={page.href}
                            />
                          </li>
                        ))}
                        {links.map((link) => (
                          <li className="mx-2 p-0" key={`${link.id}_menulink`}>
                            <a href={link.href}>
                              <div className="flex flex-row items-center justify-end w-24 cursor-pointer">
                                <span className="font-semibold mr-1 text-gray-400 dark:text-gray-400">
                                  {link.displayName.toUpperCase()}
                                </span>
                                <link.Icon className="text-gray-500" />
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </header>
          <main className=" h-full py-6 text-center flex-grow flex flex-row  justify-center">
            {children}
          </main>
          <footer className="mx-auto text-sm flex flex-row justify-center items-center leading-6	p-4 min-h-2 w-full">
            <span className="text-gray-900 dark:text-gray-100 text-md">
              {`© ${dayjs().year()} `}
              <a href="https://christ.dev/">{'Chris Taylor'}</a>
            </span>
          </footer>
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

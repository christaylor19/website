import dayjs from 'dayjs';
import Head from 'next/head';
import React from 'react';
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedInIcon,
  AiOutlineMail as EmailIcon,
  AiOutlineTwitter as TwitterIcon,
} from 'react-icons/ai';

import pages from '../data/pages';
import NavLink from './NavLink';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const Layout: React.FC<Props> = ({ children, pathname }): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{'Chris Taylor Codes'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/CascadiaCode.woff2" as="font" type="font/woff2" />
      </Head>
      <div className="flex flex-col h-screen xs:px-4 sm:px-4 md:px-10 lg:px-96">
        <header className="xs:px-0 sm:px-0 md:px-2 px-20">
          <nav className="h-40 mt-8">
            <ul className="flex flex-row items-center  break-all py-2 px-4 list-none w-full">
              <li className="mx-2 p-0">
                <span className="text-gray-800 dark:text-gray-200  font-semibold no-underline text-xl">
                  {'CHRIS TAYLOR'}
                </span>
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="home" pathname={pathname} href="/" />
              </li>
              {pages.map((page) => (
                <li className="px-2 border-l-2 border-gray-400 dark:border-blue-900 leading-4">
                  <NavLink displayName={page.headerName} pathname={pathname} href={page.href} />
                </li>
              ))}

              <li className="flex-grow" />
              <li className="mx-2 p-0">
                <a href="https://github.com/christaylor19">
                  <GithubIcon size="1.2em" className="text-gray-600" />
                </a>
              </li>
              <li className="mx-2 p-0">
                <a href="https://twitter.com/1.2em">
                  <TwitterIcon size="1.2em" className="text-gray-600" />
                </a>
              </li>
              <li className="mx-2 p-0">
                <a href="https://www.linkedin.com/in/chris-taylor-b50703a7/">
                  <LinkedInIcon size="1.2em" className="text-gray-600" />
                </a>
              </li>
              <li className="mx-2 p-0 ">
                <a href="mailto:christaylor94.dev@gmail.com">
                  <EmailIcon size="1.2em" className="text-gray-600" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mx-auto relative w-full h-full p-6 text-center flex-grow">{children}</main>
        <footer className="mx-auto text-sm flex flex-row justify-center items-center leading-6	p-4 min-h-2 w-full">
          <span className="text-gray-900 dark:text-gray-100 text-md">
            {`© ${dayjs().year()} `}
            <a href="https://christ.dev/">{'Chris Taylor'}</a>
          </span>
        </footer>
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

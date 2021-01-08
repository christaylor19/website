import Head from 'next/head';
import React from 'react';
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedInIcon,
  AiOutlineMail as EmailIcon,
  AiOutlineTwitter as TwitterIcon,
} from 'react-icons/ai';
import { TiHome } from 'react-icons/ti';

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
      <div className="flex flex-col h-screen px-96">
        <header className="px-20">
          <nav className="h-40 mt-8">
            <ul className="flex flex-row items-center  break-all py-2 px-4 list-none w-full">
              <li className="mx-2 p-0">
                <span className="text-gray-800 font-semibold no-underline text-xl">
                  {'CHRIS TAYLOR'}
                </span>
              </li>
              <li className="flex-grow" />
              <li className="mx-2 p-0">
                <NavLink displayName="home" pathname={pathname} href="/" />
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="who" pathname={pathname} href="/who" />
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="what" pathname={pathname} href="/what" />
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="why" pathname={pathname} href="/why" />
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="where" pathname={pathname} href="/where" />
              </li>
              <li className="mx-2 p-0">
                <NavLink displayName="how" pathname={pathname} href="/how" />
              </li>
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
              <li className="mx-2 p-0">
                <a href="mailto:christaylor94.dev@gmail.com">
                  <EmailIcon size="1.2em" className="text-gray-600" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            width: '100%',
            height: '100%',
            padding: 10,
            textAlign: 'center',
            flexGrow: 2,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 12,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            lineHeight: '24px',
            padding: 8,
            minHeight: '2vh',
            width: '100%',
          }}
        >
          <span style={{ color: 'black' }}>
            {'© 2020 '}
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
            font-family: Varela, Roboto, sans-serif, 'Arial';
            margin: 0;
            color: #fff;
          }
          @font-face {
            font-family: Varela;
            src: url('fonts/Varela/Varela-Regular.ttf');
            font-display: swap;
          }
        `}
      </style>
    </>
  );
};

export default Layout;

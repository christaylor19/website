import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TiHome } from 'react-icons/ti';

import GithubIcon from '../GithubIcon';
import LinkedInIcon from '../LinkedInIcon';
import TwitterIcon from '../TwitterIcon';

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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header style={{ padding: '0 10px' }}>
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginLeft: 'auto',
              marginRight: 'auto',
              minHeight: '5vh',
            }}
          >
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                marginRight: 8,
                padding: '8px 16px',
                borderRadius: 12,
                border: '4px solid black',
                overflowX: 'auto',
                wordBreak: 'keep-all',
              }}
            >
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/' ? 'underline' : 'none',
                    }}
                  >
                    <TiHome size="2em" style={{ color: 'black' }} />
                  </a>
                </Link>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/who" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/who' ? 'underline' : 'none',
                    }}
                  >
                    who
                  </a>
                </Link>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/what" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/what' ? 'underline' : 'none',
                    }}
                  >
                    what
                  </a>
                </Link>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/why" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/why' ? 'underline' : 'none',
                    }}
                  >
                    why
                  </a>
                </Link>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/where" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/where' ? 'underline' : 'none',
                    }}
                  >
                    where
                  </a>
                </Link>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <Link href="/how" passHref>
                  <a
                    style={{
                      color: 'black',
                      textDecoration: pathname === '/how' ? 'underline' : 'none',
                    }}
                  >
                    how
                  </a>
                </Link>
              </li>
            </ul>
            <ul
              style={{
                marginRight: 8,
                padding: '8px 16px',
                borderRadius: 12,
                border: '4px solid black',
              }}
            >
              <li style={{ padding: 0, margin: '0 5px' }}>
                <a href="https://github.com/christaylor19">
                  <span>
                    <GithubIcon />
                  </span>
                </a>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <a href="https://twitter.com/ChrisTaylor94_">
                  <span>
                    <TwitterIcon />
                  </span>
                </a>
              </li>
              <li style={{ padding: 0, margin: '0 5px' }}>
                <a href="https://www.linkedin.com/in/chris-taylor-b50703a7/">
                  <span>
                    <LinkedInIcon />
                  </span>
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
            justifyContent: 'space-evenly',
            lineHeight: 24,
            padding: 8,
            minHeight: '2vh',
            width: '100%',
            borderTop: '2px dashed #000',
          }}
        >
          <span>
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
            font-family: Cascadia, sans-serif, 'Arial';
            margin: 0;
            color: #fff;
          }
          @font-face {
            font-family: Cascadia;
            src: url('fonts/CascadiaCode.woff2');
            font-display: swap;
          }
        `}
      </style>
    </>
  );
};

export default Layout;

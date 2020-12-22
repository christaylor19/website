import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TiHome } from 'react-icons/ti';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../config/theme';
import GithubIcon from '../../atoms/GithubIcon';
import LinkedInIcon from '../../atoms/LinkedInIcon';
import TwitterIcon from '../../atoms/TwitterIcon';
import { Footer, Main, Menu, MenuItem, Nav, NavLink } from './Layout.style';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const Layout: React.FC<Props> = ({ children, pathname }): React.ReactElement => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{'Chris Taylor Codes'}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preload" href="/fonts/CascadiaCode.woff2" as="font" type="font/woff2" />
        </Head>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <header style={{ padding: '0 10px' }}>
            <Nav>
              <Menu
                style={{
                  marginRight: 8,
                  padding: '8px 16px',
                  borderRadius: 12,
                  border: '4px solid black',
                }}
              >
                <MenuItem>
                  <Link href="/" passHref>
                    <NavLink active={pathname === '/'}>
                      <TiHome size="2em" style={{ color: 'black' }} />
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/who" passHref>
                    <NavLink active={pathname === '/who'} style={{ color: 'black' }}>
                      who
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/what" passHref>
                    <NavLink active={pathname === '/what'} style={{ color: 'black' }}>
                      what
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/why" passHref>
                    <NavLink active={pathname === '/why'} style={{ color: 'black' }}>
                      why
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/where" passHref>
                    <NavLink active={pathname === '/where'} style={{ color: 'black' }}>
                      where
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/how" passHref>
                    <NavLink active={pathname === '/how'} style={{ color: 'black' }}>
                      how
                    </NavLink>
                  </Link>
                </MenuItem>
              </Menu>
              <Menu
                style={{
                  marginRight: 8,
                  padding: '8px 16px',
                  borderRadius: 12,
                  border: '4px solid black',
                }}
              >
                <MenuItem>
                  <NavLink active={false} href="https://github.com/christaylor19">
                    <span>
                      <GithubIcon />
                    </span>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink active={false} href="https://twitter.com/ChrisTaylor94_">
                    <span>
                      <TwitterIcon />
                    </span>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink active={false} href="https://www.linkedin.com/in/chris-taylor-b50703a7/">
                    <span>
                      <LinkedInIcon />
                    </span>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Nav>
          </header>
          <Main>{children}</Main>
          <Footer>
            <span>
              {'© 2020 '}
              <NavLink active={false} href="https://christ.dev/">
                {'Chris Taylor'}
              </NavLink>
            </span>
          </Footer>
        </div>
      </ThemeProvider>
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

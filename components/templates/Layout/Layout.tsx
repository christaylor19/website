import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { TiHome } from 'react-icons/ti';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../config/theme';
import GithubIcon from '../../atoms/GithubIcon';
import LinkedInIcon from '../../atoms/LinkedInIcon';
import TwitterIcon from '../../atoms/TwitterIcon';
import { Footer, Main, Menu, MenuItem, Nav, NavLink, Small } from './Layout.style';

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
                  backgroundColor: '#07003c',
                  borderRadius: 12,
                  border: '4px solid #F1B170',
                }}
              >
                <MenuItem>
                  <Link href="/" passHref>
                    <NavLink active={pathname === '/'}>
                      <TiHome size="2em" />
                    </NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/me" passHref>
                    <NavLink active={pathname === '/me'}>who</NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/about" passHref>
                    <NavLink active={pathname === '/about'}>what</NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/why" passHref>
                    <NavLink active={pathname === '/why'}>why</NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/geo" passHref>
                    <NavLink active={pathname === '/geo'}>where</NavLink>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/uses" passHref>
                    <NavLink active={pathname === '/uses'}>how</NavLink>
                  </Link>
                </MenuItem>
              </Menu>
              <Menu
                style={{
                  marginRight: 8,
                  padding: '8px 16px',
                  backgroundColor: '#07003c',
                  borderRadius: 12,
                  border: '4px solid #F1B170',
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
            <span>
              {'Background by '}
              <a
                style={{
                  textDecoration: 'none',
                  fontFamily: "Cascadia, sans-serif, 'Arial'",
                  color: '#fff',
                  border: '1px solid #fff',
                  borderRadius: 5,
                  padding: 1,
                }}
                href="https://products.ls.graphics/paaatterns/index.html"
              >
                {'paaatterns'}
              </a>
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
            // background-image: url(/images/Whangaehu.svg);
            background-color: #07003c;
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

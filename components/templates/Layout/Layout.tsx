import React from 'react';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import { theme } from '../../../config/theme';
import { MenuItem, Nav, Menu, Footer, Main, NavLink } from './Layout.style';
import GithubIcon from '../../atoms/GithubIcon';
import TwitterIcon from '../../atoms/TwitterIcon';
import LinkedInIcon from '../../atoms/LinkedInIcon';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <Nav>
            <Menu>
              <MenuItem>
                <Link href="/" passHref>
                  <NavLink>home</NavLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/me" passHref>
                  <NavLink>who</NavLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about" passHref>
                  <NavLink>what</NavLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/why" passHref>
                  <NavLink>why</NavLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/geo" passHref>
                  <NavLink>where</NavLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/uses" passHref>
                  <NavLink>how</NavLink>
                </Link>
              </MenuItem>
            </Menu>
            <Menu>
              <MenuItem>
                <NavLink href="https://github.com/christaylor19">
                  <span>
                    <GithubIcon />
                  </span>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink href="https://twitter.com/ChrisTaylor94_">
                  <span>
                    <TwitterIcon />
                  </span>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink href="https://www.linkedin.com/in/chris-taylor-b50703a7/">
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
            © 2020 <NavLink href="https://christ.dev/">Chris Taylor</NavLink>
          </span>
        </Footer>
      </ThemeProvider>
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Roboto', sans-serif, 'Arial';
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default Layout;

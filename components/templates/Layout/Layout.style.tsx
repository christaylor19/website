import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  min-height: 5vh;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  word-break: keep-all;
  overflow-x: auto;
  align-items: center;
`;

export const MenuItem = styled.li`
  padding: 0;
  margin: 0 5px;
`;

export const Main = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  min-height: 90vh;
  padding: 20px;
`;

export const Footer = styled.footer`
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  padding: 8px;
  min-height: 2vh;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
`;

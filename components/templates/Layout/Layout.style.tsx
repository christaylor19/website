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
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
  flex-grow: 2;
`;

export const Footer = styled.footer`
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  line-height: 24px;
  padding: 8px;
  min-height: 2vh;
  width: 100%;
  background-color: #07003c;
  border-top: 2px solid #f1b170;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  outline: 2pd dashed #fff;
`;

export const Small = styled.span`
  font-size: 2px;
`;

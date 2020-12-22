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
  border-top: 2px dashed #000;
`;

type INavLink = {
  active: boolean;
};

export const NavLink = styled.a<INavLink>`
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  color: #000;
`;

export const Small = styled.span`
  font-size: 2px;
`;

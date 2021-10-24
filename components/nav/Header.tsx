import React from 'react';

import pages from '../../data/pages';
import NavLink from '../NavLink';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

interface Props {
  pathname: string;
}
const Header: React.FC<Props> = ({ pathname }) => {
  return (
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
          <SocialLinks />
          <MobileMenu pathname={pathname} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

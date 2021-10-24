import React from 'react';
import { HiMenu } from 'react-icons/hi';

import pages from '../../data/pages';
import NavLink from '../NavLink';
import SocialLinks from './SocialLinks';

interface Props {
  pathname: string;
}

const MobileMenu: React.FC<Props> = ({ pathname }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <li className="relative mx-2 p-0 lg:hidden">
      <HiMenu
        className="text-gray-500 cursor-pointer hover:text-gray-900 h-5 w-5 "
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <div className="absolute pt-2 text-right right-0 z-10">
          <ul className="flex flex-col border-r-2 border-gray-400 dark:border-blue-900">
            {pages.map((page) => (
              <li
                key={`${page.name}_menulink`}
                className="xs:block sm:block md:hidden px-2  leading-4"
              >
                <NavLink displayName={page.headerName} pathname={pathname} href={page.href} />
              </li>
            ))}
            <SocialLinks mobile />
          </ul>
        </div>
      )}
    </li>
  );
};

export default MobileMenu;

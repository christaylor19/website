import React, { FC, useContext } from 'react';
import { ImBrightnessContrast } from 'react-icons/im';

import { ModeContext } from '../../context/appContext';
import NavLink from '../NavLink';
import SocialLinks from './SocialLinks';

const Header: FC = () => {
  const { toggle } = useContext(ModeContext);
  return (
    <header>
      <nav className="flex flex-row items-center justify-center mt-8 ">
        <ul className="flex flex-row items-center break-all py-2 list-none w-full ">
          <li className="mr-6 p-0" key="home-mobile">
            <NavLink displayName="home" href="/" />
          </li>
          <li className="flex-grow" key="spacer" />
          <li className="mx-2 p-0">
            <ImBrightnessContrast
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 h-8 w-8"
              onClick={() => toggle()}
            />
          </li>
          <SocialLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

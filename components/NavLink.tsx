import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  href: string;
  displayName: string;
}

const NavLink: FC<Props> = ({ displayName, href }) => {
  return (
    <>
      <Link href={href} passHref>
        <a className={'text-2xl text-gray-400 dark:text-gray-400 hover:text-gray-900'}>
          <span className="font-semibold ">{displayName.toUpperCase()}</span>
        </a>
      </Link>
    </>
  );
};

export default NavLink;

import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  pathname: string;
  displayName: string;
}

const NavLink: React.FC<Props> = ({ displayName, pathname, href }) => {
  return (
    <>
      <Link href={href} passHref>
        <a className={`text-sm ${href === pathname ? 'text-gray-900' : 'text-gray-400'}`}>
          <span className="font-semibold">{displayName.toUpperCase()}</span>
        </a>
      </Link>
    </>
  );
};

export default NavLink;

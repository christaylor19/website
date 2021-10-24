import React from 'react';

import links from '../../data/links';

interface Props {
  mobile?: boolean;
}

const SocialLinks: React.FC<Props> = ({ mobile = false }) => {
  return (
    <>
      {mobile
        ? links.map((link) => (
            <li className="mx-2 p-0" key={`${link.id}_menulink`}>
              <a href={link.href}>
                <div className="flex flex-row items-center justify-end w-24 cursor-pointer">
                  <span className="font-semibold mr-1 text-gray-400 dark:text-gray-400">
                    {link.displayName.toUpperCase()}
                  </span>
                  <link.Icon className="text-gray-500" />
                </div>
              </a>
            </li>
          ))
        : links.map((link) => (
            <li className="mx-2 p-0 xxs:hidden xs:hidden sm:hidden md:hidden lg:block">
              <a href={link.href}>
                <link.Icon className="text-gray-500 hover:text-gray-900 h-5 w-5" />
              </a>
            </li>
          ))}
    </>
  );
};

export default SocialLinks;

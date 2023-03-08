import { FC } from 'react';

import links from '../../data/links';

const SocialLinks: FC = () => (
  <>
    {links.map((link) => (
      <li className="mx-2 p-0" key={`${link.id}_menulink_mobile`}>
        <a href={link.href}>
          <link.Icon className="text-gray-600 dark:text-gray-400 hover:text-gray-900 h-8 w-8" />
        </a>
      </li>
    ))}
  </>
);

export default SocialLinks;

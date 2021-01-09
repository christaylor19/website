import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

import Link from '../types/link';

const links: Link[] = [
  {
    id: 'github',
    displayName: 'Github',
    href: 'https://github.com/christaylor19',
    Icon: AiFillGithub,
  },
  {
    id: 'twitter',
    displayName: 'Twitter',
    href: 'https://twitter.com/1.2em',
    Icon: AiOutlineTwitter,
  },
  {
    id: 'linkedin',
    displayName: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chris-taylor-b50703a7/',
    Icon: AiFillLinkedin,
  },
  {
    id: 'email',
    displayName: 'Email',
    href: 'mailto:christaylor94.dev@gmail.com',
    Icon: AiOutlineMail,
  },
];

export default links;

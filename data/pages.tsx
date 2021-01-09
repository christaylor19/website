import Page from '../types/page';

const pages: Page[] = [
  {
    id: 'about',
    headerName: 'About',
    title: 'About Me',
    href: '/about',
    content: <>{'Hello World'}</>,
  },
  {
    id: 'career',
    headerName: 'Career',
    title: 'Career',
    href: '/career',
    content: <>{'Hello World'}</>,
  },
  {
    id: 'skills',
    headerName: 'Skills',
    title: 'Skills',
    href: '/skills',
    content: <>{'Hello World'}</>,
  },
  {
    id: 'portfolio',
    headerName: 'Portfolio',
    title: 'My Portfolio',
    href: '/portfolio',
    content: <>{'Hello World'}</>,
  },
  {
    id: 'setup',
    headerName: 'Setup',
    title: 'My Setup',
    href: '/setup',
    content: <>{'Hello World'}</>,
    subtitle: 'shit expensive technology probably',
  },
];

export default pages;

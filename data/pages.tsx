import About from '../content/about';
import Career from '../content/Career';
import Portfolio from '../content/Portfolio';
import Setup from '../content/Setup';
import Skills from '../content/Skills';
import Page from '../types/page';

const pages: Page[] = [
  {
    id: 'about',
    headerName: 'About',
    title: 'About Me',
    href: '/about',
    content: <About />,
  },
  {
    id: 'career',
    headerName: 'Career',
    title: 'Career',
    href: '/career',
    content: <Career />,
  },
  {
    id: 'skills',
    headerName: 'Skills',
    title: 'Skills',
    href: '/skills',
    content: <Skills />,
  },
  {
    id: 'portfolio',
    headerName: 'Portfolio',
    title: 'My Portfolio',
    href: '/portfolio',
    content: <Portfolio />,
  },
  {
    id: 'setup',
    headerName: 'Setup',
    title: 'My Setup',
    href: '/setup',
    content: <Setup />,
  },
];

export default pages;

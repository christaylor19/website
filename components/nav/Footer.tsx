import dayjs from 'dayjs';
import { FC } from 'react';

const Footer: FC = () => (
  <footer className="mx-auto text-sm flex flex-row justify-center items-center leading-6	p-4 min-h-2 w-full">
    <span className="text-gray-900 dark:text-gray-100 text-md">
      {`© ${dayjs().year()} `}
      <a href="https://christ.dev/">{'Chris Taylor'}</a>
    </span>
  </footer>
);

export default Footer;

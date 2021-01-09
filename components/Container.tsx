import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  children: JSX.Element;
}

const Container: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="flex flex-col text-gray-500 dark:text-gray-300 items-start">
        <h1 className="font-bold text-4xl">{title}</h1>
        <h2 className="font-semibold text-2xl">{subtitle}</h2>
        {children}
      </div>
    </>
  );
};

export default Container;

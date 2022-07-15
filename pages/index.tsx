import React, { FC } from 'react';
import {
  SiAirbnb,
  SiAmazonaws,
  SiDocker,
  SiDotnet,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNetlify,
  SiNextdotjs,
  SiPuppeteer,
  SiPython,
  SiServerless,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
} from 'react-icons/si';

import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';

const Home: FC = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-gray-500 dark:text-gray-300 items-start w-full ">
          <h1 className="font-bold text-4xl mb-4">Chris Taylor</h1>
          <h2 className="font-bold text-2xl mb-4">Projects</h2>
          <h4 className="font-normal text-xl mb-2">Prem Visualiser Project</h4>
          <div className="flex flex-row gap-2">
            <SiNetlify />
            <SiSupabase />
            <SiAirbnb />
            <SiVite />
          </div>
          <ProgressBar />

          <h2 className="font-bold text-2xl mb-4">Experience</h2>

          <h4 className="font-normal text-xl mb-2">Perlego</h4>
          <div className="flex flex-row gap-2">
            <SiTypescript />
            <SiGraphql />
            <SiAmazonaws />
            <SiServerless />
            <SiDocker />
            <SiJest />
            <SiTestinglibrary />
            <SiStorybook />
            <SiWebpack />
          </div>
          <h4 className="font-normal text-xl mb-2">Apak</h4>
          <div className="flex flex-row gap-2">
            <SiJavascript />
            <SiDotnet />
          </div>

          <h2 className="font-bold text-2xl mb-4">Skills</h2>
          <div className="flex flex-row gap-2">
            <SiJavascript />
            <SiTypescript />
            <SiNetlify />
            <SiGraphql />
            <SiAmazonaws />
            <SiServerless />
            <SiPuppeteer />
            <SiDocker />
            <SiDotnet />
            <SiPython />
            <SiNextdotjs />
            <SiTailwindcss />
            <SiStyledcomponents />
            <SiVercel />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

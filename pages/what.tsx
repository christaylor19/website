import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';

const About = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Page title="Hello World" subtitle="and again">
          <>{'this website was designed at 2am'}</>
        </Page>
      </Layout>
    </>
  );
};

export default About;

import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';

const Why = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Page title="Hello World">
          <>{'also asking this question'}</>
        </Page>
      </Layout>
    </>
  );
};

export default Why;

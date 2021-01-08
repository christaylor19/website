import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';

const Uses = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Page title="Hello World">
          <>{'shit expensive technology probably'}</>
        </Page>
      </Layout>
    </>
  );
};

export default Uses;

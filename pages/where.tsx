import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';

const Geo = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Page title="Hello World">
          <>{'everywhere'}</>
        </Page>
      </Layout>
    </>
  );
};

export default Geo;

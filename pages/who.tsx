import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';

const Me = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Page title="Hello World">
          <>{'hi'}</>
        </Page>
      </Layout>
    </>
  );
};

export default Me;

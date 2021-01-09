import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import Page from '../components/Page';
import pages from '../data/pages';

const Why = () => {
  const {
    query: { page: queryPage },
    pathname,
  } = useRouter();

  const page = pages.find((page) => page.id === queryPage);
  return (
    <>
      <Layout pathname={pathname}>
        <Page title={page.title} subtitle={page.subtitle}>
          <>{page.content}</>
        </Page>
      </Layout>
    </>
  );
};

export default Why;

import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import pages from '../data/pages';

const Page = () => {
  const {
    query: { page: queryPage },
    pathname,
  } = useRouter();

  const page = pages.find((page) => page.id === queryPage);
  return (
    <>
      {page && (
        <Layout pathname={pathname}>
          <Container title={page.title} subtitle={page.subtitle}>
            <>{page.content}</>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default Page;

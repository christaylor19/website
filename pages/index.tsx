import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <Container title="Hello World">
          <>{'Content Soon'}</>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

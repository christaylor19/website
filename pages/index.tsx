import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Layout pathname={pathname}>
        <Container title="Hello World">
          <>{'Content Soon'}</>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

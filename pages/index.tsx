import { useRouter } from 'next/router';
import React, { FC } from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';

const Home: FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Layout pathname={pathname}>
        <Container title="Hello World">
          <>
            <h2 className="font-bold text-2xl">Projects</h2>
            <h2 className="font-bold text-2xl">Experience</h2>
            <h2 className="font-bold text-2xl">Contact Details</h2>

            <ProgressBar />
          </>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

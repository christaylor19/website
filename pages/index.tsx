import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import { getAllPages } from '../lib/api';
import Page from '../types/page';

interface Props {
  allPages?: Page[];
}

const Home: React.FC<Props> = ({ allPages = [] }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Layout pathname={pathname} pages={allPages}>
        <Container title="Hello World">
          <>{'Content Soon'}</>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllPages();
  return {
    props: { allPages: data?.pages },
  };
}

export default Home;

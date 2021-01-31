import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import { getAllPages } from '../lib/api';
// import { getAllPages } from '../lib/strapi-api';
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
  const sd = JSON.parse(JSON.stringify(data));
  return {
    props: { allPages: sd },
  };
}

export default Home;

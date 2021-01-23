import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import RichText from '../components/RichText';
import { getAllPages, getPageByName } from '../lib/api';
import TPage from '../types/page';

interface Props {
  page?: TPage;
  allPages?: TPage[];
}

const Page: React.FC<Props> = ({ page, allPages }) => {
  const { pathname, isFallback } = useRouter();

  if (!isFallback && !page?.name && false) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {page && (
        <Layout pathname={pathname} pages={allPages}>
          <Container title={page.title} subtitle={page.subtitle}>
            <RichText content={page.content} />
          </Container>
        </Layout>
      )}
    </>
  );
};

export async function getStaticProps({ params }) {
  const allPages = await getAllPages();
  const sd = JSON.parse(JSON.stringify(allPages));
  const currentPage = await getPageByName(params.page);

  return {
    props: {
      page: {
        ...currentPage[0],
      },
      allPages: sd,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPages();
  const sd = JSON.parse(JSON.stringify(allPages));
  return {
    paths: sd.map((page) => `/${page.href}`) || [],
    fallback: false,
  };
}

export default Page;

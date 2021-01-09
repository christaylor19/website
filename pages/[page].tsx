import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import { getAllPages, getPageByName } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import TPage from '../types/page';

interface Props {
  page?: TPage;
  allPages?: TPage[];
}

const Page: React.FC<Props> = ({ page, allPages }) => {
  const { pathname, isFallback } = useRouter();

  if (!isFallback && !page?.name) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {page && (
        <Layout pathname={pathname} pages={allPages}>
          <Container title={page.title} subtitle={page.subtitle}>
            <>{page.content}</>
          </Container>
        </Layout>
      )}
    </>
  );
};

export async function getStaticProps({ params }) {
  const allPages = await getAllPages();
  const currentPage = await getPageByName(params.page);
  const content = await markdownToHtml(currentPage?.content || '');

  return {
    props: {
      page: {
        ...currentPage,
        content,
      },
      allPages: allPages?.pages,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPages();
  return {
    paths: allPages?.pages.map((page) => `/${page.name}`) || [],
    fallback: false,
  };
}

export default Page;

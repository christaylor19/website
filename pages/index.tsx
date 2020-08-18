import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/templates/Layout';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <div
          style={{
            marginRight: 8,
            padding: '8px 16px',
            backgroundColor: '#07003c',
            borderRadius: 12,
            border: '4px solid #F1B170',
          }}
        >
          Content Soon
        </div>
      </Layout>
    </>
  );
};

export default Home;

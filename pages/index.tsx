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
            backgroundColor: '#fff',
            borderRadius: 12,
            color: '#000',
            border: '4px solid #000',
          }}
        >
          Content Soon
        </div>
      </Layout>
    </>
  );
};

export default Home;

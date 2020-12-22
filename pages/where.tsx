import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/templates/Layout';

const Geo = () => {
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
            border: '4px solid #000',
            color: '#000',
          }}
        >
          everywhere
        </div>
      </Layout>
    </>
  );
};

export default Geo;

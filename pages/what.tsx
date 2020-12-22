import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/templates/Layout';

const About = () => {
  const router = useRouter();
  return (
    <>
      <Layout pathname={router.pathname}>
        <div
          style={{
            marginRight: 8,
            padding: '8px 16px',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: 12,
            border: '4px solid #000',
          }}
        >
          this website was designed at 2am
        </div>
      </Layout>
    </>
  );
};

export default About;

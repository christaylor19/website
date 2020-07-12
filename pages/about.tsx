import React from 'react';

import Layout from '../components/templates/Layout';

const About = () => {
  return (
    <>
      <Layout>
        <div
          style={{
            marginRight: 8,
            padding: '8px 16px',
            backgroundColor: '#07003c',
            borderRadius: 12,
            border: '4px solid #F1B170',
          }}
        >
          this website was designed at 2am
        </div>
      </Layout>
    </>
  );
};

export default About;

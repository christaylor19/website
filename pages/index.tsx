import React from 'react';
import guled from 'guled';
import Layout from '../components/templates/Layout';

const Home = () => (
  <>
    <Layout>Some Content, probably {guled()}</Layout>
  </>
);

export default Home;

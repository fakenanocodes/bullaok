import React from 'react';
import Layout from '../components/Layout';
import Header from './corporate-connect/Header';
import Why from './corporate-connect/Why';
import How from './corporate-connect/How';

export default function CorporateConnect() {
  return (
    <Layout>
      <Header />
      <Why />
      <How />
    </Layout>
  );
}

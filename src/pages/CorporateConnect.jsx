import React from 'react';
import Layout from '../components/Layout';
import Header from './corporate-connect/Header';
import Why from './corporate-connect/Why';
import How from './corporate-connect/How';
import Submit from './corporate-connect/Submit';
import Invest from './corporate-connect/Invest';
import WhyCorporate from './corporate-connect/WhyCorporate';
import Disclsure from './corporate-connect/Disclsure';

export default function CorporateConnect() {
  return (
    <Layout>
      <Header />
      <Why />
      <How />
      <Submit />
      <Invest />
      <WhyCorporate />
      <Disclsure />
    </Layout>
  );
}

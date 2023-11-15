import Layout from '../components/Layout';
import Benefits from './margin-trading/Benefits';
import Faqs from './margin-trading/Faqs';
import Header from './margin-trading/Header';
import How from './margin-trading/How';
import Risks from './margin-trading/Risks';
import Why from './margin-trading/Why';

export default function MarginTrading() {
  return (
    <Layout>
      <Header />
      <Why />
      <Risks />
      <Benefits />
      {/* <Trading /> */}
      <How />
      <Faqs />
    </Layout>
  );
}

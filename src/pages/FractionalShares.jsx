import Layout from '../components/Layout';
import Faqs from './fractional-shares/Faqs';
import GetStarted from './fractional-shares/GetStarted';
import Header from './fractional-shares/Header';
import How from './fractional-shares/How';
import Stock from './fractional-shares/Stock';

export default function FractionalShares() {
  return (
    <Layout>
      <Header />
      <Stock />
      <How />
      <GetStarted />
      <Faqs />
    </Layout>
  );
}

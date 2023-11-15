import Layout from '../components/Layout';
import Header from './ETF/Header';
import Learn from './ETF/Learn';
import OpenAccount from './ETF/OpenAccount';
import Stocks from './ETF/Stocks';
import Trading from './ETF/Trading';
import WhyInvest from './ETF/WhyInvest';

export default function ETF() {
  return (
    <Layout>
      <Header />
      <WhyInvest />
      <OpenAccount />
      <Stocks />
      <Trading />
      <Learn />
    </Layout>
  );
}

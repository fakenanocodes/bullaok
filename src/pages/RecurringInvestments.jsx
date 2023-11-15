import Layout from '../components/Layout';
import Benefits from './recurring-investment/Benefits';
import Faqs from './recurring-investment/Faqs';
import Header from './recurring-investment/Header';
import How from './recurring-investment/How';
import Investment from './recurring-investment/Investment';
import Stock from './recurring-investment/Stock';

export default function RecurringInvestments() {
  return (
    <Layout>
      <Header />
      <How />
      <Investment />
      <Benefits />
      <Stock />
      <Faqs />
      {/* <Setup /> */}
    </Layout>
  );
}

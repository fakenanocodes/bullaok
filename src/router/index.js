// import { Login } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';
import BonusContainer from '../components/BonusContainer';
import CardApplicationSetup from '../components/card_application_setup';
import { courses, header, testimonials } from '../data/education';
import DashboardLayout from '../layouts/dashboardLayout';
import About from '../pages/About';
import CorporateConnect from '../pages/CorporateConnect';
import ETF from '../pages/ETF';
import Education from '../pages/Education';
import EducationCourses from '../pages/EducationCourses';
import Faq from '../pages/Faq';
import Forex from '../pages/Forex';
import FractionalShares from '../pages/FractionalShares';
import History from '../pages/History';
import Home from '../pages/Home';
import Hub from '../pages/Hub';
import Investing from '../pages/Investing';
import Investment from '../pages/Investment';
import Ira from '../pages/Ira';
import MarginTrading from '../pages/MarginTrading';
import OptionsPage from '../pages/OptionsPage';
import Otc from '../pages/Otc';
import PaperTrading from '../pages/PaperTrading';
import RecurringInvestments from '../pages/RecurringInvestments';
import Signup from '../pages/Signup';
import SmartAdvisor from '../pages/SmartAdvisor';
import Stock from '../pages/Stock';
import Team from '../pages/Team';
import WhatWeInvest from '../pages/WhatWeInvest';
import WhoWeAre from '../pages/WhoWeAre';
import DashboardHome from '../pages/dashboard/DashboardHome';

import InvestmentHistory from '../pages/dashboard/InvestmentHistory';
import Profile from '../pages/dashboard/Profile';
import ReferralContainer from '../pages/dashboard/Referral';
// import InvestmentPackages from '../pages/dashboard/InvestmentPackages';
import ForgotPassword from '../components/auth/forgot-password';
import UserLogin from '../components/auth/login';
import SuccessThanks from '../components/kycPages/SuccessThanks';
import Broker from '../pages/Broker';
import TeamBroker from '../pages/TeamBroker';
import TeamMember from '../pages/TeamMember';
import InvestmentPackages from '../pages/dashboard/InvestmentPackages';
import InvestmentPlan from '../pages/dashboard/InvestmentPlan';
import Kyc from '../pages/dashboard/Kyc';
import Notifications from '../pages/dashboard/Notifications';
import RunningInvestment from '../pages/dashboard/RunningInvestment';
import Support from '../pages/dashboard/Support';
import Deposit from '../pages/dashboard/transactions/Deposit';
import Transfer from '../pages/dashboard/transactions/Transfer';
import Withdrawal from '../pages/dashboard/transactions/Withdrawal';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/history',
    Component: History,
  },
  {
    path: '/who-we-are',
    Component: WhoWeAre,
  },
  {
    path: '/etf',
    Component: ETF,
  },
  {
    path: '/margin-trading',
    Component: MarginTrading,
  },
  {
    path: '/stocks',
    Component: Stock,
  },
  {
    path: '/otc-stock-trading',
    Component: Otc,
  },
  {
    path: '/services/recurring-investment',
    Component: RecurringInvestments,
  },
  {
    path: '/fractional-shares',
    Component: FractionalShares,
  },
  {
    path: '/corporate-connect',
    Component: CorporateConnect,
  },
  {
    path: '/invest',
    Component: Investment,
  },
  {
    path: '/investment-packages',
    Component: Investing,
  },
  {
    path: '/ira',
    Component: Ira,
  },
  {
    path: '/hub',
    Component: Hub,
  },
  {
    path: '/options',
    Component: OptionsPage,
  },
  {
    path: '/papertrading',
    Component: PaperTrading,
  },
  {
    path: '/services/smart-advisor',
    Component: SmartAdvisor,
  },
  {
    path: '/services/what-we-invest',
    Component: WhatWeInvest,
  },
  {
    path: 'team',
    Component: Team,
  },
  {
    path: '/team/member/:subpage',
    Component: TeamMember,
  },
  {
    path: '/team/broker/:subpage',
    Component: TeamBroker,
  },
  {
    path: 'faq',
    Component: Faq,
  },
  {
    path: '/services/education',
    Component: Education,
    loader: () => {
      return {
        courses,
        header,
        testimonials,
      };
    },
  },
  {
    path: 'education-courses',
    Component: EducationCourses,
    loader: () => {
      return { courses };
    },
  },
  {
    path: 'about',
    Component: About,
  },
  {
    path: 'brokers',
    Component: Broker,
  },
  {
    path: 'login',
    Component: UserLogin,
  },
  {
    path: 'register',
    Component: Signup,
  },
  {
    path: 'forgot-password',
    Component: ForgotPassword,
  },
  {
    path: '/services/forex',
    Component: Forex,
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        path: '',
        Component: DashboardHome,
      },

      {
        path: 'kyc',
        Component: Kyc,
      },
      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: 'support',
        Component: Support,
      },
      {
        path: 'notification',
        Component: Notifications,
      },

      {
        path: 'card-application',
        Component: CardApplicationSetup,
      },
      {
        path: 'bonus',
        Component: BonusContainer,
      },

      {
        path: 'withdraw',
        Component: Withdrawal,
      },
      {
        path: 'deposit',
        Component: Deposit,
      },
      {
        path: 'referral',
        Component: ReferralContainer,
      },
      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: 'transfer',
        Component: Transfer,
      },
      {
        path: 'withdraw',
        Component: Withdrawal,
      },
      {
        path: 'deposit',
        Component: Deposit,
      },
      {
        path: 'kyc/success',
        Component: SuccessThanks,
      },
      {
        path: 'investment/packages',
        Component: InvestmentPackages,
      },
      {
        path: 'investment/running',
        Component: RunningInvestment,
      },
      {
        path: 'plan',
        Component: InvestmentPlan,
      },
      {
        path: 'investment/history',
        Component: InvestmentHistory,
      },
    ],
  },
]);

export default router;

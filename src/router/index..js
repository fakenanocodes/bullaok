import { Login } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';
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
import InvestmentPackages from '../pages/dashboard/InvestmentPackages';
import InvestmentPlan from '../pages/dashboard/InvestmentPlan';
import RunningInvestment from '../pages/dashboard/RunningInvestment';
import Profile from '../pages/dashboard/Profile';

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
    path: 'login',
    Component: Login,
  },
  {
    path: 'register',
    Component: Signup,
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
        path: 'profile',
        Component: Profile
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
        path: 'investment/plan',
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

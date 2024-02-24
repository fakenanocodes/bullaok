import { Login } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';
import { courses, header, testimonials } from '../data/education';
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

const router = createBrowserRouter([
  {
    path: '/',
    component: Home,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/who-we-are',
    component: WhoWeAre,
  },
  {
    path: '/etf',
    component: ETF,
  },
  {
    path: '/margin-trading',
    component: MarginTrading,
  },
  {
    path: '/stocks',
    component: Stock,
  },
  {
    path: '/otc-stock-trading',
    component: Otc,
  },
  {
    path: '/services/recurring-investment',
    component: RecurringInvestments,
  },
  {
    path: '/fractional-shares',
    component: FractionalShares,
  },
  {
    path: '/corporate-connect',
    component: CorporateConnect,
  },
  {
    path: '/invest',
    component: Investment,
  },
  {
    path: '/investment-packages',
    component: Investing,
  },
  {
    path: '/ira',
    component: Ira,
  },
  {
    path: '/hub',
    component: Hub,
  },
  {
    path: '/options',
    component: OptionsPage,
  },
  {
    path: '/papertrading',
    component: PaperTrading,
  },
  {
    path: '/services/smart-advisor',
    component: SmartAdvisor,
  },
  {
    path: '/services/what-we-invest',
    component: WhatWeInvest,
  },
  {
    path: 'team',
    component: Team,
  },
  {
    path: 'faq',
    component: Faq,
  },
  {
    path: '/services/education',
    component: Education,
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
    component: EducationCourses,
    loader: () => {
      return { courses };
    },
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Signup,
  },
  {
    path: '/services/forex',
    component: Forex,
  },
]);

export default router;

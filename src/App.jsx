import { Route, Routes } from 'react-router-dom';
import './App.css';
import { courses, header, testimonials } from './data/education';
import About from './pages/About';
import CorporateConnect from './pages/CorporateConnect';
import ETF from './pages/ETF';
import Education from './pages/Education';
import EducationCourses from './pages/EducationCourses';
import Faq from './pages/Faq';
import FractionalShares from './pages/FractionalShares';
import History from './pages/History';
import Home from './pages/Home';
import Hub from './pages/Hub';
import Investing from './pages/Investing';
import Investment from './pages/Investment';
import Ira from './pages/Ira';
import Login from './pages/Login';
import MarginTrading from './pages/MarginTrading';
import OptionsPage from './pages/OptionsPage';
import Otc from './pages/Otc';
import PaperTrading from './pages/PaperTrading';
import RecurringInvestments from './pages/RecurringInvestments';
import Signup from './pages/Signup';
import SmartAdvisor from './pages/SmartAdvisor';
import Stock from './pages/Stock';
import Team from './pages/Team';
import WhatWeInvest from './pages/WhatWeInvest';
import WhoWeAre from './pages/WhoWeAre';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/etf" element={<ETF />} />
        <Route path="/margin-trading" element={<MarginTrading />} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/otc-stock-trading" element={<Otc />} />
        <Route
          path="/recurring-investment"
          element={<RecurringInvestments />}
        />
        <Route path="/fractional-shares" element={<FractionalShares />} />
        <Route path="/corporate-connect" element={<CorporateConnect />} />
        <Route path="/invest" element={<Investing />} />
        <Route path="/investment-packages" element={<Investment />} />
        <Route path="/ira" element={<Ira />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/papertrading" element={<PaperTrading />} />
        <Route path="smart-advisor" element={<SmartAdvisor />} />
        <Route path="what-we-invest" element={<WhatWeInvest />} />
        <Route path="team" element={<Team />} />
        <Route path="faq" element={<Faq />} />
        <Route
          path="education"
          element={
            <Education
              courses={courses}
              header={header}
              testimonials={testimonials}
            />
          }
        />
        <Route
          path="education-courses"
          element={<EducationCourses courses={courses} />}
        />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

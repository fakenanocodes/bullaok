import { Route, Routes } from 'react-router-dom';
import './App.css';
import CorporateConnect from './pages/CorporateConnect';
import ETF from './pages/ETF';
import FractionalShares from './pages/FractionalShares';
import Home from './pages/Home';
import Hub from './pages/Hub';
import Investing from './pages/Investing';
import Investment from './pages/Investment';
import Ira from './pages/Ira';
import MarginTrading from './pages/MarginTrading';
import OptionsPage from './pages/OptionsPage';
import Otc from './pages/Otc';
import PaperTrading from './pages/PaperTrading';
import RecurringInvestments from './pages/RecurringInvestments';
import SmartAdvisor from './pages/SmartAdvisor';
import Stock from './pages/Stock';
import WhatWeInvest from './pages/WhatWeInvest';
import WhoWeAre from './pages/WhoWeAre';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<WhoWeAre />} />
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
        <Route path="/investment-Packages" element={<Investment />} />
        <Route path="/ira" element={<Ira />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/papertrading" element={<PaperTrading />} />
        <Route path="smart-advisor" element={<SmartAdvisor />} />
        <Route path="what-we-invest" element={<WhatWeInvest />} />
      </Routes>
    </div>
  );
}

export default App;

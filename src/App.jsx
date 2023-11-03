import { Route, Routes } from 'react-router-dom';
import './App.css';
import CorporateConnect from './pages/CorporateConnect';
import ETF from './pages/ETF';
import FractionalShares from './pages/FractionalShares';
import Home from './pages/Home';
import Investing from './pages/Investing';
import MarginTrading from './pages/MarginTrading';
import Otc from './pages/Otc';
import RecurringInvestments from './pages/RecurringInvestments';
import Stock from './pages/Stock';
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
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import OptionsPage from './Pages/OptionsPage';
import ETF from './pages/ETF';
import Home from './pages/Home';
import MarginTrading from './pages/MarginTrading';
import Otc from './pages/Otc';
import Stock from './pages/Stock';
import WhoWeAre from './pages/WhoWeAre';
import PaperTrading from './Pages/PaperTrading';
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
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/papertrading" element={<PaperTrading />} />
      </Routes>
    </div>
  );
}

export default App;

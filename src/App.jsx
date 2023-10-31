import { Route, Routes } from 'react-router-dom';
import './App.css';
import ETF from './pages/ETF';
import Home from './pages/Home';
import MarginTrading from './pages/MarginTrading';
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
      </Routes>
    </div>
  );
}

export default App;

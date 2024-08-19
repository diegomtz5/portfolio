import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BudgetToBudget from './components/BudgetToBudget';
import SplitPaymentApp from './components/SplitPaymentApp';
import MLProject from './components/MLProject';
import ReceiptScanner from './components/ReceiptScanner';
import PortfolioWebsite from './components/PortfolioWebsite';
import CoopSpaceshipFight from './components/CoopSpaceshipFight';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> {/* Keep the Header always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/budget-to-budget" element={<BudgetToBudget />} />
        <Route path="/projects/split-payment-app" element={<SplitPaymentApp />} />
        <Route path="/projects/ml-song-predictor" element={<MLProject />} />
        <Route path="/projects/receipt-scanner" element={<ReceiptScanner />} />
        <Route path="/projects/portfolio" element={<PortfolioWebsite />} />
        <Route path="/projects/coop-spaceship-fight" element={<CoopSpaceshipFight />} />
      </Routes>
    </Router>
  );
}

export default App;

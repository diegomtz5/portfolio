import React from 'react';
import { Analytics } from "@vercel/analytics/react"
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
      <Analytics />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/budget-to-budget" element={<><Header /><BudgetToBudget /></>} />
        <Route path="/projects/split-payment-app" element={<><Header /><SplitPaymentApp /></>} />
        <Route path="/projects/ml-song-predictor" element={<><Header /><MLProject /></>} />
        <Route path="/projects/receipt-scanner" element={<><Header /><ReceiptScanner /></>} />
        <Route path="/projects/portfolio" element={<><Header /><PortfolioWebsite /></>} />
        <Route path="/projects/coop-spaceship-fight" element={<><Header /><CoopSpaceshipFight /></>} />
      </Routes>
    </Router>
  );
}

export default App;

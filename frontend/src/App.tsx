import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoanForm from './components/LoanForm';
import LoanStats from './components/LoanStats';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loan-form" element={<LoanForm />} />
      <Route path="/loan-stats" element={<LoanStats />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

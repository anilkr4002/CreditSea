import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoanForm from './components/LoanForm';
import LoanStats from './components/LoanStats';
import Login from './components/Login';
import SignUp from './components/SignUp';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/loan-form" element={<LoanForm />} />
    <Route path="/loan-stats" element={<LoanStats />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default AppRoutes;

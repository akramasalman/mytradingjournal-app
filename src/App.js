
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Journal from './pages/Journal';
import Learn from './pages/Learn';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/journal" />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

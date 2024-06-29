import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Techniques from './pages/Techniques';
import Materials from './pages/Materials';
import InterestBoard from './pages/InterestBoard';
import ProjectHistory from './pages/ProjectHistory';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/interest-board" element={<InterestBoard />} />
          <Route path="/project-history" element={<ProjectHistory />} />
        </Routes>
    </Router>
  );
}

export default App;

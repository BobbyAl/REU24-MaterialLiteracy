import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Techniques from './pages/Techniques';
import Materials from './pages/Materials';
import InterestBoard from './pages/InterestBoard';
import ProjectHistory from './pages/ProjectHistory';
import Home from './pages/Home';
import './App.css';

const App = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      resonpse => resonpse.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

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
  )
}

export default App

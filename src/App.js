// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import A from './components/A';
import Login from './components/Login';
import withAuth from './hoc/withAuth';

const App = () => {
  return (
   
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={withAuth(Home)} />
          <Route path="/a" element={withAuth(A)} />
        </Routes>
      </Router>
     
  );
};

export default App;

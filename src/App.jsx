import './App.css';
import './styles.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import Top from './components/Top';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import './styles.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import Top from './components/Top';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

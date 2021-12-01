import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Top from './components/Top';
// import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Top />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

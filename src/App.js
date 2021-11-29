import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Top from './components/Top';

const App = () => {
  axios.get('http://localhost:3001/api/recommended_books').then((response) => {
    console.log(response.data.recommended_books[0].url)
  });

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Top/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

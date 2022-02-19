import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './page/SearchImage';
import Account from './page/Account';
import ErrorPage from './page/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mystyle.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/profile/:id" element={<Account />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
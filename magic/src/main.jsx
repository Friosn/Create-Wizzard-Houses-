import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';

import Home from './pages/Home';
import GenerateHouse from './pages/GenerateHouse';
import Gallery from './pages/Gallery';
import About from './pages/About';
import HouseDetail from './pages/HouseDetail';
import NotFound from './pages/404';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="generate" element={<GenerateHouse />} />
          <Route path="houses" element={<Gallery />} />
          <Route path="houses/:id" element={<HouseDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

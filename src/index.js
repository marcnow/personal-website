/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Software from './components/routes/Software';
import Blog from './components/routes/Blog';
import TheGreatChickenNuggetSauceRanking from './components/routes/TheGreatChickenNuggetSauceRanking';
import MoreToCome from './components/routes/MoreToCome';
import Pomodoro from './components/Pomodoro';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<App />} />
      <Route path="/software" element={<Software />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/blog/the-great-chicken-nugget-sauce-ranking" element={<TheGreatChickenNuggetSauceRanking />} />
      <Route path="/blog/more-to-come" element={<MoreToCome />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

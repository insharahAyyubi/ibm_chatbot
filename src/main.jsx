import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx'
import Team from './components/Team/Team.jsx'
import Chatbot from './components/Chatbot/Chatbot.jsx';
import Header from './components/Header/Header.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="chatbot" element={<Chatbot />} />
    </Routes>
  </BrowserRouter>
);
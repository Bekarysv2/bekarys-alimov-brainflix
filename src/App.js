import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from './components/Navigation-Bar/Nav-bar';
import Home from './pages/Home/Home'; 
import UploadPage from './pages/Upload/Upload'; 


function App() {

  return (
    <BrowserRouter>
      <NavigationBar className="nav-bar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

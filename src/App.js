import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from './components/Navigation-Bar/Nav-bar';
import Home from './pages/Home/Home'; 
// import UploadPage from './components/UploadPage/UploadPage'; 

const api = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "b54c779d-f50f-4e7f-835a-a08775c541a5";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${api}/videos?api_key=${apiKey}`)
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => console.error("Failed to fetch videos", error));
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar className="nav-bar" />
      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="/video/:videoId" element={<Home videos={videos} />} />
        {/* <Route path="/upload" element={<UploadPage />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import './App.css'; 
import NavigationBar from './components/Navigation-Bar/Nav-bar';
import MainVideo from './components/MainVideo/Main-video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import NewComment from './components/Add-Comment/New-comment';
import Videolist from './components/Video-List/Video-list';

import VideoJson from './data/video-details.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [videos, setVideos] = useState(VideoJson);
  const [selectedVideo, setSelectedVideo] = useState(VideoJson[0]);
  const [comments, setComments] = useState(VideoJson[0].comments);

  const clickHandler = (video) => {
    setSelectedVideo(video);
    setComments(video.comments);
  }

  return (
    <>
        <NavigationBar className="nav-bar" /> 
        <MainVideo className="main-video" video={selectedVideo} /> 
        <div className="main-layout">
          <div className="main-content"> 
            <VideoDetails video={selectedVideo} />
            <NewComment commentsCount={comments.length} />
            <Comments video={selectedVideo} />
          </div>
          <aside className="next-videos"> 
            <Videolist videos={videos} clickHandler={clickHandler} selectedVideo={selectedVideo} />
          </aside>
        </div>
      </>
  );
}

export default App;
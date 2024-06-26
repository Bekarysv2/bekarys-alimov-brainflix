import React, { useState, useEffect } from 'react';
import './Home.scss'; 
import MainVideo from '../../components/MainVideo/Main-video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import Comments from '../../components/Comments/Comments';
import NewComment from '../../components/Add-Comment/New-comment';
import Videolist from '../../components/Video-List/Video-list';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const api = "http://localhost:8080/";

const fetchVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(api + "videos/" + videoId);
    const videoDetailsResponse = response.data;
    return videoDetailsResponse;
  } catch (error) {
    console.error("fetchVideoDetails failed", error)
  }
}

const fetchVideos = async () => {
    try {
      const response = await axios.get(api + "videos");
      const videoListResponse = response.data;
      return videoListResponse;
    } catch (error) {
      console.error("fetchVideos failed", error)
    }
  }
  
  function Home() {
  
    const [videoList, setvideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const [sideVideos, setSideVideos] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { videoId } = useParams();
  
  
    useEffect(() => {
      const fetchData = async () => {
        const videoListResponse = await fetchVideos();
        setvideoList(videoListResponse);
  
        if (videoId) {
           const videoDetailsResponse = await fetchVideoDetails(videoId);
           setSelectedVideo(videoDetailsResponse);
           
        } else {
          const firstVideo = videoListResponse[0].id;
          const videoDetailsResponse = await fetchVideoDetails(firstVideo)
          setSelectedVideo(videoDetailsResponse);
        }
        setIsLoading(false);
      }
      
      fetchData()
    }, [videoId]);
  
  
    useEffect(() => {
        if (isLoading === false) {
          const selectedVideoComments = selectedVideo.comments || [];
          setCommentCount(selectedVideoComments.length);
      
          const filteredVideos = videoList.filter((video) => {
            return video.id !== selectedVideo.id;
          });
          setSideVideos(filteredVideos);
        }
  
    }, [selectedVideo, isLoading, videoList])

    if (isLoading === true) {
      return <p>Loading...</p>;
    }

    return (
        <>
            <div className='MainVideo-container'>
                <MainVideo video={selectedVideo} />
            </div>
            <div className="main-layout">
                <div className="main-content"> 
                    <VideoDetails video={selectedVideo} />
                    <NewComment commentsCount={commentCount} />
                    <Comments comments={selectedVideo.comments} />
                </div>
                <aside className="next-videos"> 
                    <Videolist videos={sideVideos} />
                </aside>
            </div>
        </>
    );
}

export default Home;

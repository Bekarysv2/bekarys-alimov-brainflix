import React, { useState, useEffect } from 'react';
import './Home.scss'; 
import MainVideo from '../../components/MainVideo/Main-video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import Comments from '../../components/Comments/Comments';
import NewComment from '../../components/Add-Comment/New-comment';
import Videolist from '../../components/Video-List/Video-list';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const api = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "?api_key=b54c779d-f50f-4e7f-835a-a08775c541a5";

const fetchVideos = async () => {
    try {
      const response = await axios.get(api + "/videos" + apiKey);
      const videoListResponse = response.data;
      return videoListResponse;
    } catch (error) {
      console.log("fetchVideos api call failed")
    }
  }
  
  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(api + "/videos/" + videoId + apiKey);
      const videoDetailsResponse = response.data;
      return videoDetailsResponse;
    } catch (error) {
      console.log("fetchVideoDetails api call failed")
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
          const videoDetailsResponse = await fetchVideoDetails(videoListResponse[0].id)
          setSelectedVideo(videoDetailsResponse);
        }
  
        setIsLoading(false);
  
      }
      
      fetchData()
  
  
    }, [videoId]);
  
  
    useEffect(() => {
        if (isLoading === false) {
          const selectedVideoComments = selectedVideo.comments;
          setCommentCount(selectedVideoComments.length);
      
          const filteredVideos = videoList.filter((video) => {
            return video.id !== selectedVideo.id;
          });
          setSideVideos(filteredVideos);
        }
  
    }, [selectedVideo])
  
  
   
    if (isLoading === true) {
      return <p>Loading...</p>;
    }

    return (
        <>
            <MainVideo video={selectedVideo} />
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

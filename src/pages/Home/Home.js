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
const apiKey = "b54c779d-f50f-4e7f-835a-a08775c541a5";

function Home() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const { videoId } = useParams();

    useEffect(() => {
        axios.get(`${api}/videos/?api_key=${apiKey}`)
            .then(response => {
                setVideos(response.data);
                const videoToDisplay = videoId ? 
                    response.data.find(video => video.id === videoId) : 
                    response.data[0];
                setSelectedVideo(videoToDisplay);
            })
            .catch(error => console.error("There was an error fetching the videos", error));
    }, [videoId]); 

    const clickHandler = (selected) => {
        setSelectedVideo(selected);
    };

    return (
        <>
            <MainVideo video={selectedVideo} />
            <div className="main-layout">
                <div className="main-content"> 
                    <VideoDetails video={selectedVideo} />
                    <NewComment commentsCount={selectedVideo.comments?.length || 0} />
                    <Comments comments={selectedVideo.comments} />
                </div>
                <aside className="next-videos"> 
                    <Videolist videos={videos} clickHandler={clickHandler} selectedVideoId={selectedVideo.id} />
                </aside>
            </div>
        </>
    );
}

export default Home;

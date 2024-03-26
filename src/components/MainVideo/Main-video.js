import './Main-video.scss'; 

const MainVideo = ({ currentVideo }) => {
    if (!currentVideo) {
        return <div>Loading video...</div>;
    }

    return (
        <section className="video-container">
            <video 
                className="mainVideo"
                width="100%"
                height="auto"
                poster={currentVideo.image} 
                controls 
            >
                <source src={currentVideo.video} type="video/mp4" /> 
            </video>
        </section>
    );
};


export default MainVideo;

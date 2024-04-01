import './Main-video.scss'; 

const MainVideo = ({ video }) => {
    if (!video) {
        return <div>Loading video...</div>;
    }

    return (
        <section className="video-container">
            <video 
                className="mainVideo"
                width="100%"
                height="auto"
                poster={video.image} 
                controls 
            >
                <source src={video.video} type="video/mp4" /> 
            </video>
        </section>
    );
};


export default MainVideo;

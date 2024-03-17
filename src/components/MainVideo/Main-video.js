import './Main-video.scss'; 

const MainVideo = ({ currentVideo }) => {
    if (!currentVideo) {
        return <div>Loading video...</div>; // or any other loading state or spinner
    }

    return (
        <section className="video-container">
            <video 
                className="mainVideo"
                width="100%"
                height="auto"
                poster={currentVideo.image} // Now safely accessed
                controls 
            >
                <source src={currentVideo.video} type="video/mp4" /> 
            </video>
        </section>
    );
};


export default MainVideo;

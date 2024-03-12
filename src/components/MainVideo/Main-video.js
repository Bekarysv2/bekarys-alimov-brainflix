import './Main-video.scss';

const MainVideo = ({currentVideo}) => {
    return (
        <section className="video-container">
            <video 
                className="mainVideo"
                width= "100%"
                height= "auto"
                poster= "video.image"
                controls 
            >
                <source src="" type="video/mp4" /> 
            </video>
        </section>
    );
};

export default MainVideo;
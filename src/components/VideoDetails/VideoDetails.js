import './VideoDetails.scss';
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({video}) => {

    const timestamp = new Date(video.timestamp);

    return (
        <section className="active-video">
            <p className="active-video__title">{video.title}</p>
            <div className="active-video__details">
                <div className="active-video__details__left">
                    <p className="active-video__details__left__channel">By {video.channel}</p>
                    <p className="active-video__details__left__date">{timestamp.toLocaleDateString()}</p>
                </div>
                <div className="active-video__details__right">
                    <div className="active-video__details__right__views">
                        <img src={viewIcon} className="active-video__details__right__views__icon"></img>
                        <p className="active-video__details__right__views__number">{video.views}</p>
                    </div>
                    <div className="active-video__details__right__likes">
                        <img src={likeIcon} className="active-video__details__right__likes__icon"></img>
                        <p className="active-video__details__right__likes__number">{video.likes}</p>
                    </div>
                </div>
            </div>
            <p className="active-video__description">{video.description}</p>
        </section>
    );
};

export default VideoDetails;
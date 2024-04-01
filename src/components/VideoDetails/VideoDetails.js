import './VideoDetails.scss';
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({ video }) => {
    const timestamp = video ? new Date(video.timestamp) : new Date();
    const formattedDate = timestamp.toLocaleDateString();

    return (
        <section className="active-video">
            <p className="active-video__title">{video?.title || "Loading video title..."}</p>
            <div className="active-video__details">
                <div className="active-video__details__left">
                    <p className="active-video__details__left__channel">By {video?.channel || "Loading channel..."}</p>
                    <p className="active-video__details__left__date">{formattedDate}</p>
                </div>
                <div className="active-video__details__right">
                    <div className="active-video__details__right__views">
                        <img src={viewIcon} alt="Views icon" className="active-video__details__right__views__icon" />
                        <p className="active-video__details__right__views__number">{video?.views || "0"}</p>
                    </div>
                    <div className="active-video__details__right__likes">
                        <img src={likeIcon} alt="Likes icon" className="active-video__details__right__likes__icon" />
                        <p className="active-video__details__right__likes__number">{video?.likes || "0"}</p>
                    </div>
                </div>
            </div>
            <p className="active-video__description">{video?.description || "Loading video description..."}</p>
        </section>
    );
};

export default VideoDetails;
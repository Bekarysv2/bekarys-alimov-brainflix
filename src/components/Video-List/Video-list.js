import './Video-list.scss';

const Videolist = ({ videos, clickHandler, selectedVideo }) => {
  const newVideos = videos.filter((video) => video.id !== selectedVideo.id);

  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      <ul className="video-list__list">
        {newVideos.map((video) => (
          <li
            onClick={() => clickHandler(video)}
            key={video.id}
            className="video-list__list__item"
          >
            <div className="video-list__list__image">
              <img
                src={video.image}
                alt={video.title}
                className="video-list__list__image__item"
              />
            </div>
            <div className="video-list__list__description">
              <p className="video-list__list__description__title">{video.title}</p>
              <p className="video-list__list__description__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Videolist;

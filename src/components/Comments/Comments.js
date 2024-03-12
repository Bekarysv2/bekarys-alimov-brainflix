import './Comments.scss';

const formatDate = (timestamp) => {
    const time = new Date(timestamp);
    return (time.toLocaleDateString());
}

const Comments = ({video}) => {
    return (
        <section className='comments'>
            {video.comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <div className="comment__profile"></div>
                    <div className="comment__container">
                        <div className="comment__container__id">
                            <p className="comment__container__id__name">{comment.name}</p>
                            <p className="comment__container__id__date">{formatDate(comment.timestamp)}</p>
                        </div>
                    </div>
                    <p className="comment__content">{comment.comment}</p>
                </div>
            )
            )}
        </section>
    )
}

export default Comments;
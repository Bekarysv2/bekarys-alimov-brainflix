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
                    <div className="comments__container">
                        <div className="comments__container__profile"></div>
                        <div className="comments__container__comment">
                            <div className="comments__container__id">
                                <p className="comments__container__id__name">{comment.name}</p>
                                <p className="comments__container__id__date">{formatDate(comment.timestamp)}</p>
                            </div>
                            <p className="comments__content">{comment.comment}</p>
                        </div>
                    </div>
                </div>
            )
            )}
        </section>
    )
}

export default Comments;
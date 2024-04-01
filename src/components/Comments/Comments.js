import './Comments.scss';

const formatDate = (timestamp) => {
    const time = new Date(timestamp);
    return (time.toLocaleDateString());
}

const Comments = ({ comments }) => {
    return (
        <section className='comments'>
            {comments.map((comments) => (
                <div className="comment" key={comments.id}>
                    <div className="comments__container">
                        <div className="comments__container__profile"></div>
                        <div className="comments__container__comment">
                            <div className="comments__container__id">
                                <p className="comments__container__id__name">{comments.name}</p>
                                <p className="comments__container__id__date">{formatDate(comments.timestamp)}</p>
                            </div>
                            <p className="comments__content">{comments.comment}</p>
                        </div>
                    </div>
                </div>
            )
            )}
        </section>
    )
}

export default Comments;
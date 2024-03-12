import './New-comment.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg';

const NewComment = ({commentsCount}) => {
    return (
        <section className="submit-comment">
            <p className="comment-count">{commentsCount} Comments</p>
            <div className="submit-comment__container">
                <div className="submit-comment__container__profile">
                    <img src={Mohan}></img>
                </div>
                <form className="submit-comment__container__form">
                    <label for="comment">JOIN THE CONVERSATION</label>
                    <div className="submit-comment__container__form__fields">
                        <textarea placeholder="Add a new comment" name="comment" rows="4" id="comment" required></textarea>
                        <button type="submit" className="submit-comment__container__form__fields__button">COMMENT</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewComment;
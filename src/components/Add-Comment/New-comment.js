import React, { useState } from 'react';
import './New-comment.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg';

const NewComment = ({commentsCount, onCommentSubmit}) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting comment:', commentText);
        
        if (onCommentSubmit) {
            onCommentSubmit(commentText);
        }

        setCommentText('');
    };

    return (
        <section className="submit-comment">
            <p className="comment-count">{commentsCount} Comments</p>
            <div className="submit-comment__container">
                <div className="submit-comment__container__profile">
                    <img src={Mohan} alt="Profile" className="submit-comment__mohan"></img>
                </div>
                <form className="submit-comment__container__form" onSubmit={handleSubmit}>
                    <label htmlFor="comment" className='submit-comment__container__form__title'>JOIN THE CONVERSATION</label>
                    <div className="submit-comment__container__form__fields">
                        <textarea 
                            placeholder="Add a new comment" 
                            name="comment" 
                            rows="4" 
                            id="comment" 
                            required
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        ></textarea>
                        <button type="submit" className="submit-comment__container__form__fields__button">COMMENT</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewComment;

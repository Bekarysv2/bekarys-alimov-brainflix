import React from 'react'; 
import {useNavigate} from 'react-router-dom';
import thumbnailImage from '../../assets/images/Upload-video-preview.jpg'
import './Upload.scss';

const UploadPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert('Video uploading');
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <div className="upload">
          <p className="upload__title">Upload Video</p>
          <div className="upload__container">
            <div className="upload__desktop-flex">
                <p className="upload__thumbtitle">VIDEO THUMBNAIL</p>
                <img src={thumbnailImage} alt="Preview" className="upload__thumbnail" />
            </div>
            
            <form className="upload__form" onSubmit={handleSubmit}>
                <label htmlFor="videoTitle" className="upload__label">TITLE YOUR VIDEO</label>
                <input
                id="videoTitle"
                name="videoTitle"
                className="upload__input"
                placeholder="Add a title to your video"
                required
                />
        
                <label htmlFor="videoDesc" className="upload__label">ADD A VIDEO DESCRIPTION</label>
                <textarea
                id="videoDesc"
                name="videoDesc"
                className="upload__textarea"
                placeholder="Add a description to your video"
                required
                ></textarea>
            </form>
            </div>

    
            <div className="upload__buttons">
              <button type="button" className="upload__buttons__cancel" onClick={handleCancel}>CANCEL</button>
              <button type="submit" className="upload__buttons__submit">PUBLISH</button>
            </div>
        </div>
      );
    };
    
export default UploadPage;

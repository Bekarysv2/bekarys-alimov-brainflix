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
        <div className="upload-wrapper">
          <h1 className="upload-wrapper__title">Upload Video</h1>
          <p className="upload-wrapper__thumbtitle">VIDEO THUMBNAIL</p>
          <img src={thumbnailImage} alt="Preview" className="upload-wrapper__thumbnail" />
          
          <form className="upload-wrapper__form" onSubmit={handleSubmit}>
            <label htmlFor="videoTitle" className="upload-wrapper__label">TITLE YOUR VIDEO</label>
            <input
              id="videoTitle"
              name="videoTitle"
              className="upload-wrapper__input"
              placeholder="Add a title to your video"
              required
            />
    
            <label htmlFor="videoDesc" className="upload-wrapper__label">ADD A VIDEO DESCRIPTION</label>
            <textarea
              id="videoDesc"
              name="videoDesc"
              className="upload-wrapper__textarea"
              placeholder="Add a description to your video"
              required
            ></textarea>
    
            <div className="upload-wrapper__actions">
              <button type="button" className="upload-wrapper__cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="upload-wrapper__submit">PUBLISH</button>
            </div>
          </form>
        </div>
      );
    };
    
export default UploadPage;

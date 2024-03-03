import React from 'react'

import './uploadPhoto.scss';

export const UploadPhoto = (props) => {
  const { name, onChange, onBlur, errorMessage} = props;

  return (
    <div className='upload-photo-container'>
      <label className={`upload-photo ${errorMessage ? 'error' : ''}`} htmlFor="fileInput">
        <div className={`upload ${errorMessage ? 'error' : ''}`}>Upload</div>
        <span>Upload your photo</span>
        <input
          id='fileInput'
          type='file'
          accept='image/*'
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {errorMessage && <span className='error-message'>{errorMessage}</span>}
    </div>
  )
}

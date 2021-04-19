import React from 'react'
import './ChooseImage.scss'

const ChooseImage = (props) => {
    return (
        <div className='choose_image'>
            <input type='file' accept='image/*' onChange={(event) => props.onUploadImage(event)}/>
            <div className='upload_url'>
                <p>или загрузите по ссылке:</p>
                <input type='text' id='img-url'/>
                <button onClick={event => props.onUploadImgUrl(event)}>Загрузить</button>
            </div> 
        </div>
    )
}

export default ChooseImage
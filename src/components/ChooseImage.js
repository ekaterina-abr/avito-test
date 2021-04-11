import React from 'react'
import './ChooseImage.scss'

const ChooseImage = (props) => {
    return (
        <input type='file' className='choose_image' accept='image/*' onChange={(event) => props.onUploadImage(event)}/>
    )
}

export default ChooseImage
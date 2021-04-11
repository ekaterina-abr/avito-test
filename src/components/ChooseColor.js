import React from 'react'
import ColorInput from './ColorInput'
import './ChooseColor.scss'

const ChooseColor = (props) => {
    return (
        <div className='choose_color'>
            <h4>Выберите цвет:</h4>
            <ColorInput value={props.value} onChangeColor={props.onChangeColor}/>
        </div>
    )  
}

export default ChooseColor
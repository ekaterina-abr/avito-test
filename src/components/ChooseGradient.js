import React from 'react'
import ColorInput from './ColorInput'

const ChooseGradient = (props) => {
    return (
        <div className='gradient_color'>
            <h4>Выберите тип градиента:</h4>
            <input type='radio' name='gradient_type' id={props.id1} 
                defaultChecked={props.type === 0}
                onChange={() => props.onChangeGradientType(0)}/>
            <label htmlFor={props.id1}>линейный</label>
            <input type='radio' name='gradient_type' id={props.id2} 
                defaultChecked={props.type === 1}
                onChange={() => props.onChangeGradientType(1)}/>
            <label htmlFor={props.id2}>радиальный</label>
            <h4>Выберите цвета:</h4>
            <ColorInput value={props.values[0]} onChangeColor={(event) => props.onChangeGradientColor(event, 0)}/>
            <ColorInput value={props.values[1]} onChangeColor={(event) => props.onChangeGradientColor(event, 1)}/>
        </div>
    )
}

export default ChooseGradient
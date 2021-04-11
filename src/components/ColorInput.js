import React from 'react'

const ColorInput = props => {
    return (
        <input type='color' value={props.value} onChange={(event) => props.onChangeColor(event)}/>
    )
}

export default ColorInput
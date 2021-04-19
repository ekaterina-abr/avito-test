import React from 'react'
import ChooseColor from '../ChooseColor/ChooseColor'
import ChooseGradient from '../ChooseGradient/ChooseGradient'
import ChooseImage from '../ChooseImage/ChooseImage'
import './FormParameters.scss'

const FormParameters = props => {
    return (
        <form className='FormParameters'>
            <fieldset className='choose_background'>
                <h4>Выберите фон*:</h4>
                <div className='choose_background_type'>
                    <input type='radio' name='ad_background' id='single-color-option' 
                        defaultChecked={props.state.optionChecked === 0}
                        onChange={() => props.onChangeRadioChecked(0)}/>
                    <label htmlFor='single-color-option'>одноцветный</label>
                    <input type='radio' name='ad_background' id='gradient-option' 
                        defaultChecked={props.state.optionChecked === 1} 
                        onChange={() => props.onChangeRadioChecked(1)}/>
                    <label htmlFor='gradient-option'>градиентный</label>
                    <input type='radio' name='ad_background' id='image-option'
                        defaultChecked={props.state.optionChecked === 2}
                        onChange={() => props.onChangeRadioChecked(2)}/>
                    <label htmlFor='image-option'>загрузить изображение</label>
                </div>

                { props.state.optionChecked === 0 ? <ChooseColor value={props.state.background.color} onChangeColor={props.onChangeColor}/> :
                    props.state.optionChecked === 1 ? <ChooseGradient id1='linear-gradient' id2='radial-gradient' 
                                                        type={props.state.background.gradient} values={props.state.background.colors} 
                                                        onChangeGradientColor={(event, i) => props.onChangeGradientColor(event, i)}
                                                        onChangeGradientType={(type) => props.onChangeGradientType(type)}/> :
                    props.state.optionChecked === 2 ? <ChooseImage onUploadImage={event => props.onUploadImage(event)} 
                                                        onUploadImgUrl={event => props.onUploadImgUrl(event)}/> : null }

            </fieldset>
            <fieldset>
                <h4>Введите текст:</h4>
                <input type='text' onChange={props.onAddText}/>
                <div className='change_font'>
                    <h4>Изменить шрифт:</h4>
                    <i className='fa fa-minus-circle' onClick={props.onSubtractFontSize}/>
                    <i className='fa fa-plus-circle' onClick={props.onAddFontSize}/>
                </div>
                <ChooseColor value={props.state.fontColor} onChangeColor={event => props.onChangeFontColor(event)}/>
            </fieldset>

            <small>* - поле, обязательное для заполнения</small>
        </form>
    )
}

export default FormParameters
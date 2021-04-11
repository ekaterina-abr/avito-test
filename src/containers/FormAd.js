import React, {Component} from 'react'
import './FormAd.scss'
import ChooseColor from '../components/ChooseColor'
import ChooseGradient from '../components/ChooseGradient'
import ChooseImage from '../components/ChooseImage'

class FormAd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionChecked: -1,
            background: {},
            text: ''
        }
    }

    onChangeRadioChecked = (index) => {
        this.setState({
            optionChecked: index
        })
        switch (index) {
            case 0:
                this.setState({
                    background: {
                        color: '#ffffff'
                    }
                })
                break
            case 1:
                this.setState({
                    background: {
                        gradient: 0,
                        colors: ['#ff0000', '#ffff00']
                    }
                })
                break
            case 2:
                this.setState({
                    background: {}
                })
                break
            default:
                return
        }
    }

    onChangeColor = (event) => {
        this.setState({
            background: {
                color: event.target.value
            }
        })
    }

    onChangeGradientColor = (event, i) => {
        let colors = this.state.background.colors
        colors[i] = event.target.value
        this.setState({
            background: {
                ...this.state.background,
                colors
            }
        })
    }

    onChangeGradientType = type => {
        this.setState({
            background: {
                ...this.state.background,
                gradient: type
            }
        })
    }

    onUploadImage = (event) => {
        if (this.state.background.file) {
            URL.revokeObjectURL(this.state.background.file)
        }
        let file = event.target.files[0]
        let imgUrl = URL.createObjectURL(file)
        this.setState({
            background: {
                file,
                imgUrl
            }
        })
    }

    onAddText = (event) => {
        let text = event.target.value
        this.setState({
            text
        })
    } 

    render() {
        return (
            <div className='FormAdWrapper'>
                <h2>Выберите параметры баннера</h2>
                <form className='FormAd'>
                    <fieldset className='choose_background'>
                        <h4>Выберите фон*:</h4>
                        <div className='choose_background_type'>
                            <input type='radio' name='ad_background' id='single-color-option' 
                                defaultChecked={this.state.optionChecked === 0}
                                onChange={() => this.onChangeRadioChecked(0)}/>
                            <label htmlFor='single-color-option'>одноцветный</label>
                            <input type='radio' name='ad_background' id='gradient-option' 
                                defaultChecked={this.state.optionChecked === 1} 
                                onChange={() => this.onChangeRadioChecked(1)}/>
                            <label htmlFor='gradient-option'>градиентный</label>
                            <input type='radio' name='ad_background' id='image-option'
                                defaultChecked={this.state.optionChecked === 2}
                                onChange={() => this.onChangeRadioChecked(2)}/>
                            <label htmlFor='image-option'>загрузить изображение</label>
                        </div>

                        { this.state.optionChecked === 0 ? <ChooseColor value={this.state.background.color} onChangeColor={this.onChangeColor}/> :
                            this.state.optionChecked === 1 ? <ChooseGradient id1='linear-gradient' id2='radial-gradient' 
                                                                type={this.state.background.gradient} values={this.state.background.colors} 
                                                                onChangeGradientColor={(event, i) => this.onChangeGradientColor(event, i)}
                                                                onChangeGradientType={(type) => this.onChangeGradientType(type)}/> :
                            this.state.optionChecked === 2 ? <ChooseImage onUploadImage={event => this.onUploadImage(event)}/> : null }

                    </fieldset>
                    <fieldset>
                        <h4>Введите текст:</h4>
                        <input type='text' onChange={this.onAddText}/>
                    </fieldset>
        
                    <small>* - поле, обязательное для заполнения</small>
                </form>
            </div>
        )
    }
}

export default FormAd
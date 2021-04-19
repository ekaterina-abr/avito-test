import React, {Component} from 'react'
import './FormAd.scss'
import FormParameters from '../components/FormParameters/FormParameters'
import FormViewWrapper from '../components/FormViewWrapper'

class FormAd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionChecked: -1,
            background: {},
            text: '',
            fontSize: 14,
            fontColor: '#000000'
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

    onSubtractFontSize = () => {
        if (this.state.fontSize > 2) {
            this.setState({
                fontSize: this.state.fontSize - 2
            })
        }
    }

    onAddFontSize = () => {
        if (this.state.fontSize < 60) {
            this.setState({
                fontSize: this.state.fontSize + 2
            })
        }
    }

    onChangeFontColor = event => {
        this.setState({
            fontColor: event.target.value
        })
    }

    onUploadImgUrl = (event) => {
        event.preventDefault()
        var imgUrl = document.getElementById('img-url').value
        this.setState({
            background: {
                imgUrl
            }
        })
    }

    render() {
        return (
            <div className='FormAdWrapper'>
                <h2>Выберите параметры баннера</h2>
                <div className='FormAd'>
                    <FormParameters optionChecked={this.state.optionChecked} state={this.state}
                        onChangeColor={this.onChangeColor}
                        onChangeRadioChecked={this.onChangeRadioChecked}
                        onChangeGradientColor={this.onChangeGradientColor}
                        onChangeGradientType={this.onChangeGradientType}
                        onUploadImage={this.onUploadImage}
                        onSubtractFontSize={this.onSubtractFontSize}
                        onAddFontSize={this.onAddFontSize}
                        onAddText={this.onAddText}
                        onChangeFontColor={this.onChangeFontColor}
                        onUploadImgUrl={this.onUploadImgUrl}/>
                    
                    <FormViewWrapper state={this.state}/>
                    
                </div>
                
            </div>
        )
    }
}

export default FormAd
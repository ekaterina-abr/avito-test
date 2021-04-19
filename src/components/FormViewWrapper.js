import React from 'react'
import domtoimage from 'dom-to-image'

function onSavePng() {
    var banner = document.querySelector('.FormView')
    domtoimage.toPng(banner)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'banner.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(err => {
            console.log('Could not download image', err);
        })
}

function onCopyHtml() {
    var banner = document.querySelector('.BannerBorder')
    navigator.clipboard.writeText(banner.innerHTML)
        .catch(err => {
            console.log('Could not copy html', err);
        })
}

function onCopyJSON() {
    var banner = document.querySelector('.FormView')
    var bannerJSON = copyElemToJSON(banner)

    navigator.clipboard.writeText(JSON.stringify(bannerJSON))
        .catch(err => {
            console.log('Could not copy json', err);
        })
}

function copyElemToJSON(elem) {
    var json = {}
    json['element'] = elem.tagName
    if (elem.attributes.length > 0) {
        json['attributes'] = []
        for (let i = 0; i < elem.attributes.length; i++) {
            let obj = {}
            obj['name'] = elem.attributes[i].name
            obj['value'] = elem.attributes[i].value
            json['attributes'].push(obj)
        }
        if (json['element'] === 'P') {
            json['attributes'].push({'name': 'text', 'value': elem.textContent})
        }
    }
    if (elem.children.length > 0) {
        json['children'] = []
        for (let i = 0; i < elem.children.length; i++) {
            json['children'].push(this.copyElemToJSON(elem.children[i])) 
        }
    }
    return json
}

function showImg() {
    var banner = document.querySelector('.FormView')
    domtoimage.toPng(banner)
        .then(function (dataUrl) {
            var img = new Image()
            img.src = dataUrl
            var win = window.open()
            win.document.write('<iframe src="' + dataUrl + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
        })
        .catch(err => {
            console.log('Could not open image', err);
        })
}

const FormViewWrapper = props => {
    var styleButtons = {}
    var styleBannerBorder = {}

    switch (props.state.optionChecked) {
        case 0:
            var style = {backgroundColor: props.state.background.color}
            break
        case 1:
            if (props.state.background.gradient === 0) {
                var grad = 'linear-gradient(' + props.state.background.colors[0] + ', ' + props.state.background.colors[1] + ')'
            }
            else {
                var grad = 'radial-gradient(' + props.state.background.colors[0] + ', ' + props.state.background.colors[1] + ')'
            }
            var style = {background: grad}
            break    
        case 2:
            let img = 'url(' + props.state.background.imgUrl + ')'
            var style = {backgroundImage: img, backgroundSize: '100% 100%'}
            break
        default:
            var style = {display: 'none'}
            styleBannerBorder = {display: 'none'}
            styleButtons = {display: 'none'}
    }

    let fontSize = String(props.state.fontSize) + 'px'
    let heightFloat = 3 * 1.5 * props.state.fontSize
    let height = String(heightFloat) + 'px'
    var styleP = {fontSize: fontSize, maxHeight: height, color: props.state.fontColor}

    return (
        <div className='FormViewWrapper'>
            <div className='BannerBorder' style={styleBannerBorder}>
                <div className='FormView' style={style} onClick={showImg}>
                    {props.state.text !== '' ? 
                        <p style={styleP}>{props.state.text}</p> :
                    null}
                </div>
            </div>
            <div className='download_buttons' style={styleButtons}>
                <button id='save_png' onClick={onSavePng}>Сохранить как png</button>
                <button id='copy_html' onClick={onCopyHtml}>Копировать html</button>
                <button id='copy_json' onClick={onCopyJSON}>Копировать json</button>
            </div>
        </div>
    )
}

export default FormViewWrapper
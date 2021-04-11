import React, {Component} from 'react'
import FormAd from './containers/FormAd'
import './App.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <h1>Создание баннера</h1>
                <FormAd/>
            </div>
        )
    }
}

export default App
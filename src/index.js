import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './container/AppContainer'
import './styles/index.css'

const App = () =>{

    return(
        <div>
            <AppContainer />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
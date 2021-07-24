import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

const AppContainer = () =>{
    return(
        <div>
            Hello There!
        </div>
    )
}

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
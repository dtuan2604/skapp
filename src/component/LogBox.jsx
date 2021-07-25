import React from 'react'
import { handleLogin, handleLogout } from '../api/AppManage'

const LogBox = props=>{
    const {mySky, status, setStatus} = props

    return(
        <div>
            {status ?
            (<div><h1>Congrats</h1><br />
                <button onClick={()=>handleLogout({mySky, setStatus})}>Log out</button>    
            </div>)
            :(
                <div>
                    <h1>Login with MySky</h1>
                    <button onClick={()=>handleLogin({mySky, setStatus})}>Login</button>
                </div>
                )}
        </div>
    )
}

export default LogBox
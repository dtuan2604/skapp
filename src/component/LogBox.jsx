import React from 'react'
import { handleLogin, handleLogout } from '../api/AppManage'

const LogBox = props=>{
    const {loading, mySky, status, setLoading, setStatus, setUser, setList} = props

    return(
        <div>
            {status ?
            (<div><h1>Congrats</h1><br />
                <button id="logout-button"
                disabled={loading ? true : false}
                onClick={()=>handleLogout({mySky, setStatus, setUser, setList})}>Log out</button>    
            </div>)
            :(
                <div>
                    <h1>Login with MySky</h1>
                    <button onClick={()=>handleLogin({mySky, setStatus, setUser, setList, setLoading})}>Login</button>
                </div>
                )}
        </div>
    )
}

export default LogBox
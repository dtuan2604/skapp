import React from 'react'
import { handleLogin, handleLogout } from '../api/AppManage'
import {Button} from "@material-ui/core"

const LogBox = props=>{
    const {loading, mySky, status, setLoading, setStatus, setUser, setList} = props

    return(
        <div id="logbox">
            {status ?
            (<div>
                <Button 
                variant="outlined"
                id="logout-button"
                disabled={loading ? true : false}
                onClick={()=>handleLogout({mySky, setStatus, setUser, setList})}>
                    Log out
                </Button>    
            </div>)
            :(
                <div>
                    <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4d58b8fb-b818-49d8-b9da-d26b6cba2378-1617374946045.png"
                        alt="logo" style={{height: '45px', width:'100px'}} />
                    <Button 
                    variant="outlined"
                    id="login-button" 
                    onClick={()=>handleLogin({mySky, setStatus, setUser, setList, setLoading})}>
                        Login
                    </Button>
                </div>
                )}
        </div>
    )
}

export default LogBox

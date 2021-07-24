import React from 'react'


const LoginBox = props=>{
    // const reqLogin = async()=>{
    //     if(!props.mySky){
    //         const instance = pro
    //     }

    //     const loggedIn = await props.mySky.requestLoginAccess();
    //     props.callback(loggedIn);
    // }
    const handleLogout = async =>{
        props.setmySky(null)
        props.setStatus(false)
    }
    return(
        <div>
            {props.status ?
            (<div><h1>Congrats</h1><br />
                <button onClick={handleLogout}>Log out</button>    
            </div>)
            :(
                <div>
                    <h1>Login with MySky</h1>
                    <button onClick={props.handleLogin}>Login</button>
                </div>
                )}
        </div>
    )
}

export default LoginBox
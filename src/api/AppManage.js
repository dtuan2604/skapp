import { SkynetClient } from "skynet-js"

const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

// Initiate the SkynetClient
const client = new SkynetClient(portal);
const skappdomain = portal + "/host-app.hns"
const filepath = skappdomain + "/todolists"

export const initMySky = async (props) =>{
    const setMySky = props.setMySky
    const setStatus = props.setStatus

    try{
        //initialized MySky
        const mySky = await client.loadMySky(skappdomain)
        console.log(mySky)
        //check if the user already logged in
        const status = await mySky.checkLogin()

        setMySky(mySky)
        setStatus(status)
        
        if(status){
            console.log("Congrats you are already check in")
        }
    }catch(e){
        console.error(e)
        console.error("Error happens at initMySky function.")
    }
}

export const handleLogin = async(props)=>{
    const { mySky, setStatus } = props
    try{
        const status = await mySky.requestLoginAccess()
        setStatus(status)
        if(status){
            console.log("Congrats you already logged in")
        }
    }catch(e){
        console.error(e)
        console.error("Error happens at handleLogin function.")
    } 
}

export const handleLogout = async(props)=>{
    const { mySky, setStatus } = props
    await mySky.logout()
    setStatus(false)
    console.log("You have just logged out.")

}
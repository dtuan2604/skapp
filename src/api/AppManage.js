import { SkynetClient } from "skynet-js"

const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
//main hostname would be https://siasky.net
// Initiate the SkynetClient
const client = new SkynetClient(portal);
const skappdomain = portal + "/host-app.hns"
const filepath = skappdomain + "/todolists"

export const initMySky = async (props) =>{
    const { setUser, setMySky, setStatus, setList, setLoading} = props

    try{
        //initialized MySky
        const mySky = await client.loadMySky(skappdomain)
        //check if the user already logged in
        const status = await mySky.checkLogin()
        
        setMySky(mySky)
        setStatus(status)
        
        if(status){
            const user = await mySky.userID()
            setUser(user)
            console.log("Congrats you are already check in")
            getData({user, mySky, setList, setLoading})
        }
    }catch(e){
        console.error(e)
        console.error("Error happens at initMySky function.")
    }
}

export const handleLogin = async(props)=>{
    const { mySky, setStatus, setUser, setList, setLoading } = props
    try{
        const status = await mySky.requestLoginAccess()
        setStatus(status)
        if(status){
            const user = await mySky.userID()
            setUser(user)
            console.log("Congrats you are already check in")
            getData({user, mySky, setList, setLoading})
        }
    }catch(e){
        console.error(e)
        console.error("Error happens at handleLogin function.")
    } 
}

export const handleLogout = async(props)=>{
    const { mySky, setStatus, setUser, setList } = props
    await mySky.logout()
    setStatus(false)
    setUser("")
    setList([])
    console.log("You have just logged out.")

}

export const setData = async(props) =>{
    const { user, mySky, listcopy, setLoading } = props
    
    try{
        setLoading(true)
        console.log("setData is loading.")
        console.log(await mySky.setJSON(filepath +"/"+ user , listcopy))
        setLoading(false)
        console.log("setData finish loading.")
    }catch(e){
        console.error(e)
        console.error("Error happens at setData function.")
    }
}

export const getData = async(props)=>{
    const { user, mySky, setList, setLoading } = props
    try{
        setLoading(true)
        console.log("getData is being loaded.")
        const { data } = await mySky.getJSON(filepath + "/" + user)
        setLoading(false)
        console.log("getData finish loading.")
        if(data)
            setList(data)
    }catch(e){
        console.error(e)
        console.error("Error happens at getData function.")
    }
}
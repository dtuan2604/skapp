import React, {useEffect, useState} from 'react'
import { SkynetClient } from "skynet-js";
import { ContentRecordDAC } from '@skynetlabs/content-record-library';
import LoginBox from '../component/LogBox'


const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

// Initiate the SkynetClient
const client = new SkynetClient(portal);
const dac = new ContentRecordDAC()
const hostApp = "host-app.hns";



const AppContainer = () =>{
    const [status, setStatus] = useState(null)
    const [mySky, setmySky] = useState(null)
    const handleLogin = async ()=>{
        const mySkyIns = await client.loadMySky(hostApp);
        const statusIns = await mySkyIns.requestLoginAccess();
        setStatus(statusIns)
    }
    const checkLogin = async ()=>{
        try{
            const mySkyins = await client.loadMySky(hostApp);
            const status = await mySkyins.checkLogin();
            setmySky(mySkyins)
            setStatus(status)
            if(status){
                await mySkyins.loadDacs(dac)
            }
                
        }catch(e){
            console.log(e)
            console.log("Error at checkLogin function.")
        }
    }
    useEffect(()=>{
        checkLogin()
    }, []) 

    return(
        <div>
            <LoginBox status={status} setStatus={setStatus} setmySky={setmySky} handleLogin={handleLogin}/>
        </div>
    )
}
export default AppContainer
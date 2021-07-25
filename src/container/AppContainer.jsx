import React, {useEffect, useState} from 'react'
import { initMySky} from "../api/AppManage"
// import { ContentRecordDAC } from '@skynetlabs/content-record-library';
import LogBox from '../component/LogBox'
// import TodoList from './TodoList';


const AppContainer = () =>{
    const [ mySky, setMySky ] = useState();
    const [ status, setStatus ] = useState(false);
    
    // const [list,setList] = useState([])
   
    
    useEffect(()=>{
        initMySky({setMySky, setStatus}) 
    },[]) 

    return(
        <div>
            <LogBox 
            status={status} 
            mySky={mySky} 
            setStatus={setStatus} 
            setMySky={setMySky}/>
            {/* <TodoList status={status} list={list} setList={setList} mySky={mySky}/> */}
        </div>
    )
}
export default AppContainer
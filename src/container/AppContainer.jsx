import React, {useEffect, useState} from 'react'
import { initMySky} from "../api/AppManage"
import LogBox from '../component/LogBox'
import TodoList from './TodoList';


const AppContainer = () =>{
    const [ mySky, setMySky ] = useState();
    const [ status, setStatus ] = useState(false);
    const [ list, setList ] = useState([])
    const [ user, setUser] = useState("")
    const [ loading, setLoading] = useState(false)
   
    
    useEffect(()=>{
        initMySky({setUser, setMySky, setStatus, setList, setLoading}) 
    },[]) 

    return(
        <div>
            <LogBox 
            status={status} 
            mySky={mySky} 
            setLoading={setLoading}
            setStatus={setStatus} 
            setMySky={setMySky}
            setUser={setUser}
            setList={setList}/>
            <TodoList 
            user={user}
            mySky={mySky}
            status={status} 
            list={list} 
            setList={setList}
            setLoading={setLoading}/>
        </div>
    )
}
export default AppContainer
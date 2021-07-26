import { Paper } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import { initMySky} from "../api/AppManage"
import LogBox from '../component/LogBox'
import TodoList from './TodoList';



const AppContainer = () =>{
    const [ mySky, setMySky ] = useState();
    const [ status, setStatus ] = useState(false);
    const [ list, setList ] = useState([])
    const [ user, setUser] = useState("")
    const [ loading, setLoading ] = useState(false)
   
    
    useEffect(()=>{
        initMySky({setUser, setMySky, setStatus, setList, setLoading}) 
    },[]) 

    return(
        <Paper style={{width: '800px', margin: 'auto', textAlign: 'center', padding: '15px'}}>
            <LogBox 
            loading={loading}
            status={status} 
            mySky={mySky} 
            setLoading={setLoading}
            setStatus={setStatus} 
            setMySky={setMySky}
            setUser={setUser}
            setList={setList}/>
            <TodoList 
            loading={loading}
            user={user}
            mySky={mySky}
            status={status} 
            list={list} 
            setList={setList}
            setLoading={setLoading}/>
        </Paper>
    )
}
export default AppContainer
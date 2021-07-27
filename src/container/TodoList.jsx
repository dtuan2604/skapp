import React, { useState } from 'react'
import { setData } from '../api/AppManage'
import Work from '../component/Work'
import { updateText, popWork } from '../api/ArrayManipulate'
import { LinearProgress, Paper, Button} from '@material-ui/core'

const TodoList = (props)=>{
    const { 
        loading, 
        user, 
        mySky, 
        list, 
        status, 
        setList, 
        setLoading } = props
    const [add, setAdd] = useState(false)
    //copy the list of work so that the asynchronous function can work easily
    const [listcopy, setListcopy] = useState()
    const [text, setText] = useState("")
    
    const hanldeAddworkButton = ()=>{
        setAdd(true)
        setListcopy([...list,{
            text:"",
            done: false
        }])
    }
    const handleText = event =>{
        const textIns = event.target.value
        setText(textIns)
        updateText({listcopy,textIns,setListcopy})
    }
    const handleSubmitButton = async()=>{
        setData({user, listcopy, mySky, setLoading, setList})
        setAdd(false)
        setText("")
    }
    const handleCancelbutton = ()=>{
        const index = listcopy.length - 1
        setAdd(false)
        setText("")
        popWork({listcopy, setListcopy,index})
    }
    const handleDeleteWork = async(index, setChecked) =>{
        const listcopy = await popWork({list, setListcopy, index})
        //The DOM structure marks element by index. Therefore, 
        //sometimes, when the ath element is marked to be delete.
        //After loading, the (a+1)th element, which now become ath element,
        // is automatically marked. To prevent this case, setChecked is passed 
        //to set the (a+1)th element back to its normal state. 
        if(index === listcopy.length)
            setData({user, listcopy, mySky, setLoading, setList})
        else
            setData({user, listcopy, mySky, setLoading, setList, setChecked})
            
    }
    return(
        <div id="todolist">
            {status &&
            (<Paper>
                <h1>Welcome to SKAPP - ToDoList</h1>
                { add ?
                (<div id="add-work-bar">
                    <input id="input-work" type="text" 
                    disabled={loading ? true : false}
                    value={text} onChange={handleText}/>
                    <Button id="cancel-button" variant="outlined" 
                    onClick={handleCancelbutton}>Cancel</Button> 
                    <Button id="submit-button" variant="outlined" 
                    disabled={text === "" || loading ? true : false} 
                        onClick={handleSubmitButton}>Submit</Button>
                </div>)
                :(<div>
                    <Button variant="outlined" id="add-work-button" 
                        disabled={loading ? true : false}
                        onClick={hanldeAddworkButton}>Add a work</Button>
                </div>)}
                {loading && 
                (<div>
                    <LinearProgress />
                </div>)}
                <div>
                    {list.map((work,index)=>{
                        return(
                            <Work 
                            key={index} 
                            index={index}
                            loading={loading}
                            text={work.text} 
                            done={work.done}
                            handleDeleteWork={handleDeleteWork} 
                            />)
                    })}
                </div>
            </Paper>)}
        </div>
    )
}
export default TodoList
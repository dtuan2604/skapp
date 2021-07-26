import React, { useState } from 'react'
import { setData } from '../api/AppManage'
import Work from '../component/Work'
import { updateText, popWork } from '../api/ArrayManipulate'
import { LinearProgress } from '@material-ui/core'

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
        setList(listcopy)
        setData({user, listcopy, mySky, setLoading})
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
        setData({user, 
            listcopy, 
            mySky, 
            setLoading, 
            setList, 
            setChecked
        })
    }
    // const handle = async()=>{
    //     try {
    //         const filepath = "https://siasky.net/host-app.hns/todolists/" + user 
    //         // Get discoverable JSON data from the given path.
    //         const data = await mySky.getJSON(filepath)
    //         console.log(data)
    //       } catch (error) {
    //         console.log(error)
    //       }
    // }
    return(
        <div>
            {status &&
            (<div>
                <p>Hello from TodoList?</p>
                { add ?
                (<div>
                    <input type="text" value={text} onChange={handleText}/>
                    <button onClick={handleCancelbutton}>Cancel</button> 
                    <button onClick={handleSubmitButton}>Submit</button>
                </div>)
                :(<div>
                    <button id="add-work-button" onClick={hanldeAddworkButton}>Add a work</button>
                </div>)}
                {loading && 
                (<div>
                    <LinearProgress />
                </div>)}
                {list.map((work,index)=>{
                    return(
                        <Work 
                        key={index} 
                        index={index}
                        text={work.text} 
                        done={work.done}
                        handleDeleteWork={handleDeleteWork} 
                        />)
                })}
            </div>)}
        </div>
    )
}
export default TodoList
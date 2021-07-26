import React, { useState } from 'react'
import { setData } from '../api/AppManage'
import Work from '../component/Work'

const updateText = (props)=>{
    const {listcopy, textIns, setListcopy} = props
    let instance = [...listcopy]
    instance[listcopy.length-1].text = textIns
    setListcopy(listcopy)
}
const popWork = (props)=>{
    const {listcopy, setListcopy} = props
    let instance = [...listcopy]
    instance.pop()
    setListcopy(instance)
}
const TodoList = (props)=>{
    const [add, setAdd] = useState(false)
    
    //copy the list of work so that the asynchronous function can work easily
    const [listcopy, setListcopy] = useState(props.list)
    
    const [text, setText] = useState("")
    const { user, mySky, list, status, setList, setLoading } = props
    const hanldeAddworkButton = ()=>{
        setAdd(true)
        setListcopy([...listcopy,{
            text:"",
            done: false
        }])
    }
    const handleText = event =>{
        const textIns = event.target.value
        setText(event.target.value)
        updateText({listcopy,textIns,setListcopy})

    }
    const handleSubmitButton = async()=>{
        setList(listcopy)
        setData({user, listcopy, mySky, setLoading})
        setAdd(false)
        setText("")
    }
    const handleCancelbutton = ()=>{
        setAdd(false)
        setText("")
        popWork({listcopy, setListcopy})
    }
    const handle = async()=>{
        try {
            const filepath = "https://siasky.net/host-app.hns/todolists/" + user 
            // Get discoverable JSON data from the given path.
            const data = await mySky.getJSON(filepath)
            console.log(data)
          } catch (error) {
            console.log(error)
          }
    }
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
                <button onClick={handle}>Call Work</button>
                </div>)}
                {list.map((work,index)=>{
                    return(
                        <Work key={index} text={work.text} />
                    )
                })}
            </div>)
        }
        </div>
    )
}
export default TodoList
import React, { useState } from 'react'
import Work from '../component/Work'
var concat = require('lodash.concat');
const setJson = async(mySky, test)=>{
    try{
        console.log(test)
        const {data} = await mySky.setJSON("localhost", {list:[...test]})
        console.log(data)
    }catch(e){
        console.log(e)
        console.log("Error at setJson.")
    }
}

const TodoList = (props)=>{
    const [add, setAdd] = useState(false)
    const [text, setText] = useState("")
    const hanldeAddworkButton = ()=>{
        setAdd(true)
    }
    const handleText = event =>{
        setText(event.target.value)
    }
    const handleSubmitButton = ()=>{
        var test = concat(props.list,{text})
        setAdd(false)
        setJson(props.mySky,test)
        
    }
    const handle = async()=>{
        try {
            // Get discoverable JSON data from the given path.
            const data = await props.mySky.getJSON("localhost");
            console.log(data)
          } catch (error) {
            console.log(error)
          }
    }
    return(
        <div>{props.status &&
            (<div>
                <p>Hello from TodoList?</p>
                { add ?
                (<div>
                    <input type="text" value={text} onChange={handleText}/> 
                    <button onClick={handleSubmitButton}>Submit</button>
                </div>)
                :(<div>
                <button id="add-work-button" onClick={hanldeAddworkButton}>Add a work</button>
                <button onClick={handle}>Call Work</button>
                </div>)}
                {/* {props.works.map(work=>{
                    return(
                        <Work text={work} />
                    )
                })} */}
            </div>)
        }
        </div>
    )
}
export default TodoList
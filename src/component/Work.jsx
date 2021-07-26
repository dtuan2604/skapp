import React , {useState} from 'react'
import { Paper, Checkbox } from '@material-ui/core'



const Work = props =>{
    const { index, handleDeleteWork } = props
    const [checked, setChecked] = useState(false)
    const handleCheckbox = () =>{
        if(checked){
            window.alert("You cannot uncheck the previous job!")
            return null
        }
        setChecked(true)
        handleDeleteWork(index,setChecked)
    }

    return(
        <Paper className="work" style={{width: '500px', textAlign:"left", margin: '10px auto'}}>
             <Checkbox
                checked={checked}
                onChange={handleCheckbox}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <span style={checked ? {textDecorationLine: 'line-through'}:{}}>{props.text}</span>
        </Paper>
    )
}
export default Work
export const updateText = (props)=>{
    const {listcopy, textIns, setListcopy} = props
    let instance = [...listcopy]
    instance[listcopy.length-1].text = textIns
    setListcopy(listcopy)
}
export const popWork = (props)=>{
    const {listcopy, setListcopy} = props
    let instance = [...listcopy]
    instance.pop()
    setListcopy(instance)
}
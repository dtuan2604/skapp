export const updateText = (props)=>{
    const {listcopy, textIns, setListcopy} = props
    let instance = [...listcopy]
    instance[listcopy.length-1].text = textIns
    setListcopy(listcopy)
}
export const popWork = (props)=>{
    const {listcopy, list, setListcopy, index} = props
    let instance = listcopy ? [...listcopy] : [...list]
    instance.splice(index,1)
    setListcopy(instance)
    return instance
}
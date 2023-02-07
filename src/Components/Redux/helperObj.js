

export const helperObj=(items,itemsId,actionId,newObjProps)=>{
    return  items.map(u => {
        if (u[itemsId] === actionId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
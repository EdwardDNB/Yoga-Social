
let CHANGE_MESSAGE = 'CHANGE-MESSAGE';
let ADD_MESSAGE = 'ADD-MESSAGE';
export const actionAddMESSAGE = () => ({type: ADD_MESSAGE})
export const actionChangeMESSAGE = (text) => ({type: CHANGE_MESSAGE, Newtext: text})

const dialogsReducer=(state,action)=>{
switch (action.type) {
    case CHANGE_MESSAGE:
        state.MessageText = action.Newtext
    break
    case ADD_MESSAGE:
        let Push = {id: 7, message: state.MessageText}
        let Name = {name: 'Edward', id: 7}
        state.MessagesData.push(Push)
        state.DialogsData.push(Name)
        state.MessageText = ''
        break
    default:return state
    break
}
    return state
}
export default dialogsReducer
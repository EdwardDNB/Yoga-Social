const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let dialogReduser = (state, action) => {
    switch (action.type) {


        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.Newtext
         break

        case SEND_MESSAGE:
            let body = state.newMessagesBody
            state.MessageData.push({message: body, id: 6})
            state.newMessagesBody = ''
        break
        default:return state
    }
    return state
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, Newtext: body})

export default dialogReduser
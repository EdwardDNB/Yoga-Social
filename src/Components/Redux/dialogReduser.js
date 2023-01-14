
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialDialogs={ DialogsData: [
        {name: "Oksana", id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Yan', id: 3},
        {name: 'Inna', id: 4},
        {name: 'Nikita', id: 5},
        {name: 'Snejana', id: 6},
    ],
    MessageData: [
        {message: "Are you happy today?", id: 1},
        {message: "Did you have fun at the party.", id: 2},
        {message: "Will you come to class tomorrow?", id: 3},
        {message: "Where are you from?", id: 4},
        {message: "What did you do on Saturday evening?", id: 5},
        {message: "Why was the class difficult?", id: 6},
    ]}
let dialogReduser = (state=initialDialogs, action) => {
      switch (action.type) {
        case SEND_MESSAGE:
            let body = action.textarea
            return{
                ...state,
                MessageData:[...state.MessageData,{message: body, id: 6}],
                newMessagesBody : ''
            }
        default:return state
    }
    
}
export const addPost = (textarea) => ({type: SEND_MESSAGE,textarea})

export default dialogReduser
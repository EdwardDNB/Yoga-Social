let CHANGE_MESSAGE = 'CHANGE-MESSAGE';
let ADD_MESSAGE = 'ADD-MESSAGE';
export const actionAddMESSAGE = () => ({type: ADD_MESSAGE})
export const actionChangeMESSAGE = (text) => ({type: CHANGE_MESSAGE, Newtext: text})

let existingStore = {
    DialogsData: [
        {name: 'Ruslan', id: 1},
        {name: 'Ludmila', id: 2},
        {name: 'Anna', id: 3},
        {name: 'Petr', id: 4},
        {name: 'Egor', id: 5},
        {name: 'Sergei', id: 6}
    ], MessagesData: [
        {message: 'Are you a football player?', id: 1},
        {message: 'Do you go to the cinema every week?', id: 2},
        {message: 'Does he work at the factory?', id: 3},
        {message: 'Did she live in Kyiv?', id: 4},
        {message: 'Will we go to the zoo?', id: 5},
        {message: 'She will go to school soon', id: 6}
    ],
    MessageText: 'Write Message',
};
const dialogsReducer = (state = existingStore, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE: {
            return {...state, MessageText: action.Newtext}

        }
        case ADD_MESSAGE: {
            return {
                ...state, MessagesData: [...state.MessagesData, {id: 7, message: state.MessageText}],
                DialogsData: [...state.DialogsData, {name: 'Edward', id: 7}], MessageText: ''
            }

        }
        default:
            return state

    }

}
export default dialogsReducer
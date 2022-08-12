const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        ProfilePage: {
            PostData: [
                {message: 'How are you?', likeCounts: 0},
                {message: 'Do you one a party??', likeCounts: 10}
            ],
            TextData: 'Write Messages',
        },
        DialogsPage: {
            DialogsData: [
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
            ],
            newMessagesBody:'Write Messages',
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.ProfilePage.TextData,
                likeCounts: 0
            }
            this._state.ProfilePage.PostData.push(newPost)
            this._callSubscriber(this._state)
            this._state.ProfilePage.TextData = ''
        } else if (action.type === CHANGE_POST) {
            this._state.ProfilePage.TextData = action.Newtext
            this._callSubscriber(this._state)
        }
    else if(action.type===UPDATE_NEW_MESSAGE_BODY){
        this._state.DialogsPage.newMessagesBody=action.Newtext
            this._callSubscriber(this._state)
        }
        else if(action.type===SEND_MESSAGE){
            let body=this._state.DialogsPage.newMessagesBody
            this._state.DialogsPage.MessageData.push({message: body, id: 6})
            this._callSubscriber(this._state)
            this._state.DialogsPage.newMessagesBody=''
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeActionCreator = (text) => ({ type: CHANGE_POST, Newtext: text})
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, Newtext:body })
window.store = store
export default store
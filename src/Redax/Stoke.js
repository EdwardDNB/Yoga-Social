import {rerenderEntireTree} from "../index";

let stoke = {
    getState() {
        return this._state
    },

    _state: {
        DialogsBranch: {
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
        },
        ProfileBranch: {
            PostData: [
                {postCount: 1, message: 'Hello, how are you?', likesCount: 0},
                {postCount: 2, message: 'Do you wana like a party?', likesCount: 20}
            ],
            TextData: 'Write Post',
        }
    },
    dispatch(action) {

        if (action.type=== 'ADD-POST') {
            let Push = {
                postCount: 3,
                message: this._state.ProfileBranch.TextData,
                likesCount: 0
            }
            this._state.ProfileBranch.PostData.push(Push)
            rerenderEntireTree(this._state)
            this._state.ProfileBranch.TextData = ''
        } else if (action.type=== 'CHANGE-POST')
        {
            this._state.ProfileBranch.TextData = action.Newtext
            rerenderEntireTree(this._state)
        }
    },
    rerenderEntireTree() {
    },


    encripted(observetion) {
        this.rerenderEntireTree = observetion
    },
    ChangeMessage(text) {
        this._state.DialogsBranch.MessageText = text
        rerenderEntireTree(this._state)
    },
    addMessage() {
        let Push = {id: 7, message: this._state.DialogsBranch.MessageText}
        let Name = {name: 'Edward', id: 7}
        this._state.DialogsBranch.MessagesData.push(Push)
        this._state.DialogsBranch.DialogsData.push(Name)
        rerenderEntireTree(this._state)
        this._state.DialogsBranch.MessageText = ''
    }


}
window.stoke = stoke
export default stoke
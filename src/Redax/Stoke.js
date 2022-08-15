import {rerenderEntireTree} from "../index";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
        },
        SideBar:{}
    },
    dispatch(action) {

        this._state.ProfileBranch=profileReducer(this._state.ProfileBranch,action)
        this._state.DialogsBranch=dialogsReducer(this._state.DialogsBranch,action)
        this._state.SideBar=sidebarReducer( this._state.SideBar,action)

        rerenderEntireTree(this._state)

        },
    rerenderEntireTree() {
    },


    encripted(observetion) {
        this.rerenderEntireTree = observetion
    },



}





window.stoke = stoke
export default stoke
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";

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
            newMessagesBody: 'Write Messages',
        },
        Sidebar: {}
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
        this.ProfilePage = profileReduser(this._state.ProfilePage, action)
        this.ProfilePage = dialogReduser(this._state.DialogsPage, action)
        this.Sidebar = sidebarReduser(this._state.Sidebar, action)
        this._callSubscriber(this._state)

    }


}

window.store = store
export default store
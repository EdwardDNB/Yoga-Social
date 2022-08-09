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
            ]
        }},
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.ProfilePage.TextData,
                likeCounts: 0
            }
            this._state.ProfilePage.PostData.push(newPost)
            this._callSubscriber(this._state)
            this._state.ProfilePage.TextData = ''
        } else if (action.type === 'CHANGE-POST') {
            this._state.ProfilePage.TextData = action.Newtext
            this._callSubscriber(this._state)
        }
    }
}

window.store = store
export default store
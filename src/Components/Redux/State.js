import {rerenderEntireTrees} from '../../render'
let State = {
    ProfilePage: {
        PostData: [
            {message: 'How are you?', likeCounts: 0},
            {message: 'Do you one a party??', likeCounts: 10}
        ]
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
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        message: postMessage,
        likeCounts: 0
    }
    State.ProfilePage.PostData.push(newPost)
    rerenderEntireTrees(State)
}



export default State
let rerenderEntireTree = () => {
}

let State = {
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
}
window.state = State
export const addPost = () => {
    let Push = {
        postCount: 3,
        message: State.ProfileBranch.TextData,
        likesCount: 0
    }
    State.ProfileBranch.PostData.push(Push)
    rerenderEntireTree(State)
    State.ProfileBranch.TextData = ''
}
export const ChangePost = (text) => {
    State.ProfileBranch.TextData = text
    rerenderEntireTree(State)

}
export const encripted = (observetion) => {
    rerenderEntireTree = observetion
}
export const ChangeMessage = (text) => {
State.DialogsBranch.MessageText=text
    rerenderEntireTree(State)
}
export const addMessage=()=>{
    let Push={id: 7, message: State.DialogsBranch.MessageText}
    let Name={name: 'Edward', id: 7}
    State.DialogsBranch.MessagesData.push(Push)
    State.DialogsBranch.DialogsData.push(Name)
    rerenderEntireTree(State)
    State.DialogsBranch.MessageText = ''
}
export default State

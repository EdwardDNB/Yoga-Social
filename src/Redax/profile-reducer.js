let ADD_POST = 'ADD-POST';
let CHANGE_POST = 'CHANGE-POST';
export const actionAddPost = () => ({type: ADD_POST})
export const actionChangePost = (text) => ({type: CHANGE_POST, Newtext: text})

let existingStore={
    PostData: [
        {postCount: 1, message: 'Hello, how are you?', likesCount: 0},
        {postCount: 2, message: 'Do you wana like a party?', likesCount: 20}
    ],
    TextData: 'Write Post',
};
const profileReducer=(state=existingStore,action)=> {
    switch (action.type) {
        case ADD_POST:
        let Push = {
            postCount: 3,
            message: state.TextData,
            likesCount: 0
        }
        state.PostData.push(Push)
            state.TextData = ''
            break
        case CHANGE_POST:
        state.TextData = action.Newtext
            break
        default:
            return state

    }


    return state
}
export default profileReducer
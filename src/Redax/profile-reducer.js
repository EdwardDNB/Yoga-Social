let ADD_POST = 'ADD-POST';
let CHANGE_POST = 'CHANGE-POST';
export const actionAddPost = () => ({type: ADD_POST})
export const actionChangePost = (text) => ({type: CHANGE_POST, newText: text})

let existingStore = {
    PostData: [
        {postCount: 1, message: 'Hello, how are you?', likesCount: 0},
        {postCount: 2, message: 'Do you wanna like a party?', likesCount: 20}
    ],
    TextData: 'Write Post',
};
const profileReducer = (state = existingStore, action) => {

    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.PostData=[...state.PostData]
            let newPost = {
                postCount: 3,
                message: stateCopy.TextData,
                likesCount: 0
            }
            stateCopy.PostData.push(newPost)
            stateCopy.TextData = ''
            return stateCopy
        }
        case CHANGE_POST: {
            let stateCopy = {...state}
            stateCopy.TextData = action.newText
            return stateCopy
        }
        default:
            return state

    }



}

export default profileReducer
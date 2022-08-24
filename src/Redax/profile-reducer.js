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
        case ADD_POST:
            return {
                ...state, TextData: '', PostData: [{
                    postCount: 3,
                    message: state.TextData,
                    likesCount: 0
                }, ...state.PostData,]
            }

        case CHANGE_POST:
            return {...state, TextData: action.newText}

        default:
            return state

    }


}

export default profileReducer
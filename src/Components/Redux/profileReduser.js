const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeActionCreator = (text) => ({ type: CHANGE_POST, newText: text})
let initialState={
        PostData: [
            {message: 'How are you?', likeCounts: 0},
            {message: 'Do you one a party??', likeCounts: 10}
        ],
        TextData: 'Write Messages',
    }
let profileReduser=(state=initialState,action) => {


    switch (action.type)

     {
         case ADD_POST :{
             return{...state, PostData:[...state.PostData, {message: state.TextData, likeCounts: 0}],
                 TextData : ''}
         }

        case CHANGE_POST: {
            return{...state, TextData : action.newText}
        }

         default: return state

     }

}



export default profileReduser
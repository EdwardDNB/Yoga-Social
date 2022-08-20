const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeActionCreator = (text) => ({ type: CHANGE_POST, Newtext: text})
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
            let newPost = {
                message: state.TextData,
                likeCounts: 0
            }
            let stateCopy={...state}
             stateCopy.PostData=[...state.PostData]
             stateCopy.PostData.push(newPost)
             stateCopy.TextData = ''
             return stateCopy
         }

        case CHANGE_POST: {

            let stateCopy={...state}
            stateCopy.TextData = action.Newtext
            return stateCopy
        }

         default: return state

     }

}



export default profileReduser
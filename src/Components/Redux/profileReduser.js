const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeActionCreator = (text) => ({ type: CHANGE_POST, Newtext: text})
let profileReduser=(state,action) => {


    switch (action.type)

     {
         case (ADD_POST) :{
            let newPost = {
                message: state.TextData,
                likeCounts: 0
            }
            state.PostData.push(newPost)
            state.TextData = ''
        }
        break
        case( CHANGE_POST): {
            state.TextData = action.Newtext
        }
        break
         default: return state

     }
return state
}



export default profileReduser
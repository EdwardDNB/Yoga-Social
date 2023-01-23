import {setAuthUserData} from "./authReduser";


const SET_initial = 'SET_initial_DATA';


let initialSate = {
    initial: false,
}
let initialReduser = (state = initialSate, action) => {
    switch (action.type) {
        case SET_initial:
            return {
                ...state, initial:true
            }
        default:
            return state
    }

}


export const setInitialSuccess = () => ({
    type: SET_initial,
})

export const setInitial = () => {
    return (dispatch) => {
       let promise= [dispatch(setAuthUserData())]
       Promise.all([promise])
           .then(()=>{
               dispatch(setInitialSuccess())
           })
    }
}


export default initialReduser

import {authApi} from "../../API/API";

const SET_USER_DATA = 'SET_USER_DATA';


let initialSate = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}
let authReduser = (state = initialSate, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth:true
            }

        default:
            return state
    }

}


export const setAuthUserDataSuccess = ({userId,email,login}) => ({type: SET_USER_DATA,data:{userId,email,login}})

export const setAuthUserData=()=>{
    return(dispatch)=>{
        authApi.getLogin()
            .then(data => {
                    if(data.resultCode===0){
                        let {id,email,login}=data.data
                        dispatch(setAuthUserDataSuccess({id, email, login}))
                    }
                }
            )
    }
}

export default authReduser
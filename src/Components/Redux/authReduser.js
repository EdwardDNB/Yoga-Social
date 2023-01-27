import {authApi} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';


let initialSate = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
let authReduser = (state = initialSate, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }

        default:
            return state
    }

}


export const setAuthUserDataSuccess = ({userId, email, login, isAuth}) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})
export const setAuthUserData = () => {
    return async (dispatch) => {
        let data = await authApi.getLogin()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserDataSuccess({id, email, login, isAuth: true}))
        }
    }
}
export const Log_in = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authApi.Login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let message = data.resultCode > 0 ? data.messages[0] : 'SUM ERROR'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const Logout = () => {
    return async (dispatch) => {
        let data = await authApi.Logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataSuccess({id: null, email: null, login: null, isAuth: false}))
        }
    }
}

export default authReduser
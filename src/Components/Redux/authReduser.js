import {authApi} from "../../API/API";

const SET_USER_DATA = 'SET_USER_DATA';


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
    return (dispatch) => {
        authApi.getLogin()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data
                        dispatch(setAuthUserDataSuccess({id, email, login, isAuth: true}))
                    }
                }
            )
    }
}
export const Log_in = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.Login(email, password, rememberMe)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserData())
                    }
                }
            )
    }
}
export const Logout = () => {
    return (dispatch) => {
        authApi.Logout()
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserDataSuccess({id: null, email: null, login: null, isAuth: false}))
                    }
                }
            )
    }
}

export default authReduser
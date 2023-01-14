import PhotoDefault from "../Users/userFoto.webp";
import {profileApi} from "../../API/API";


const ADD_POST = 'ADD-POST';
const setUser_Profile = 'setUser_Profile';
const getUser_Status = 'getUser_Status';
export const addPostActionCreator = (newPost) => ({type: ADD_POST,newPost})
export const setUserProfileSuccess = (userProfile) => ({type: setUser_Profile, userProfile})
export const getUserProfileStatus = (userStatus) => ({type: getUser_Status, userStatus})

let initialState = {
    PostData: [
        {message: 'How are you?', likeCounts: 0},
        {message: 'Do you one a party??', likeCounts: 10}
    ],
    userProfile: {
        photos: {small: PhotoDefault},
        contacts: {
            github: 'https://github.com/EdwardDNB',
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        userId: 26427,
        lookingForAJob: true,
        lookingForAJobDescription: 'Frontend Developer',
        fullName: 'Edward'
    },
    userStatus: 'No status',
    setStatusSuccess:false
}

let profileReduser = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST : {
            return {
                ...state, PostData: [...state.PostData, {message: action.newPost, likeCounts: 0}]
            }
        }
        case setUser_Profile: {
            return {...state, userProfile: action.userProfile}
        }
        case getUser_Status: {
            return {...state, userStatus: action.userStatus}
        }
        default:
            return state

    }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileSuccess(data))
            })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(data => {
                console.log('get',data)
                dispatch(getUserProfileStatus(data))
            })
    }
}
export const setStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(data => {
                console.log('set',data)
                if (data.resultCode === 0) {
                    dispatch(getUserProfileStatus(status))
                }
            })
    }
}

export default profileReduser
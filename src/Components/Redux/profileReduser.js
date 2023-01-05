import PhotoDefault from "../Users/userFoto.webp";
import {profileApi} from "../../API/API";

const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const setUser_Profile = 'setUser_Profile';
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeActionCreator = (text) => ({type: CHANGE_POST, newText: text})
export const setUserProfileSuccess = (userProfile) => ({type: setUser_Profile, userProfile})
let initialState = {
    PostData: [
        {message: 'How are you?', likeCounts: 0},
        {message: 'Do you one a party??', likeCounts: 10}
    ],
    TextData: 'Write Messages',
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
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'Frontend Developer',
        fullName: 'Edward'
    },

}

let profileReduser = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST : {
            return {
                ...state, PostData: [...state.PostData, {message: state.TextData, likeCounts: 0}],
                TextData: ''
            }
        }
        case CHANGE_POST: {
            return {...state, TextData: action.newText}
        }
        case setUser_Profile: {
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state

    }
}
export  const setUserProfile=(userId)=>{
    return(dispatch)=>{
        profileApi.getProfile(userId)
            .then(data => {
                console.log(data)
                dispatch(setUserProfileSuccess(data))
            })
    }
}

export default profileReduser
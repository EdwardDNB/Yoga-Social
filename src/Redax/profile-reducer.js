import EdwardImg from '../../src/Components/Pictures/Foto_2.jpg';
import {profileApi} from '../API/api';
let ADD_POST = 'ADD-POST';
let CHANGE_POST = 'CHANGE-POST';
let set_ProfileData = 'set_ProfileData';
export const actionAddPost = () => ({type: ADD_POST});
export const actionChangePost = text => ({type: CHANGE_POST, newText: text});
export const setProfileDataLocal = ProfileData => ({type: set_ProfileData, ProfileData});

let existingStore = {
  PostData: [
    {postCount: 1, message: 'Hello, how are you?', likesCount: 0},
    {postCount: 2, message: 'Do you wanna like a party?', likesCount: 20},
  ],
  TextData: 'Write Post',
  ProfileData: {
    aboutMe: 'Good Man',
    contacts: {
      facebook: 'facebook.com',
      website: null,
      vk: null,
      twitter: null,
      instagram: 'instagram.com/rudenko_4149',
      youtube: null,
      github: 'github.com/EdwardDNB ',
      mainLink: null,
      linkedIn: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'Finding Work FrontEnd',
    fullName: 'Edward Rudenko',
    userId: 1,
    photos: {
      small: EdwardImg,
      large: EdwardImg,
    },
  },
};
const profileReducer = (state = existingStore, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        TextData: '',
        PostData: [
          {
            postCount: 3,
            message: state.TextData,
            likesCount: 0,
          },
          ...state.PostData,
        ],
      };

    case CHANGE_POST:
      return {...state, TextData: action.newText};
    case set_ProfileData:
      return {...state, ProfileData: action.ProfileData};

    default:
      return state;
  }
};
export const setProfileData = userId => {
  return dispatch => {
    profileApi.getProfile(userId).then(data => {
      dispatch(setProfileDataLocal(data));
    });
  };
};
export default profileReducer;

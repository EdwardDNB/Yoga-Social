import EdwardImg from '../../src/Components/Pictures/Foto_2.jpg';
import {profileApi} from '../API/api';
let ADD_POST = 'ADD-POST';
let set_ProfileData = 'set_ProfileData';
let set_Status = 'set_Status';
export const actionAddPost = Message => ({type: ADD_POST, Message});
export const setProfileDataLocal = ProfileData => ({type: set_ProfileData, ProfileData});
export const setProfileStatusLocal = Status => ({type: set_Status, Status});

let existingStore = {
  PostData: [
    {postCount: 1, message: 'Hello, how are you?', likesCount: 0},
    {postCount: 2, message: 'Do you wanna like a party?', likesCount: 20},
  ],
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
    userId: 26427,
    photos: {
      small: EdwardImg,
      large: EdwardImg,
    },
  },
  Status: '',
};
const profileReducer = (state = existingStore, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        PostData: [
          ...state.PostData,
          {
            postCount: 3,
            message: action.Message,
            likesCount: 0,
          },
        ],
      };
    case set_ProfileData:
      return {...state, ProfileData: action.ProfileData};
    case set_Status:
      return {...state, Status: action.Status};
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
export const getProfileStatus = userId => {
  return dispatch => {
    profileApi.getStatus(userId).then(data => {
      dispatch(setProfileStatusLocal(data));
    });
  };
};
export const setProfileStatus = status => {
  return dispatch => {
    profileApi.setStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatusLocal(status));
      }
    });
  };
};
export default profileReducer;

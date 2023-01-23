import {authApi} from '../API/api';
import {stopSubmit} from 'redux-form';

let set_AuthData = 'set_AuthData';

export const setAuthDataSuc = ({id, email, login, isAuth}) => ({
  type: set_AuthData,
  data: {id, email, login, isAuth},
});

let existingStore = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = existingStore, action) => {
  switch (action.type) {
    case set_AuthData:
      return {...state, ...action.data};

    default:
      return state;
  }
};
export const setAuthData = () => dispatch => {
  return authApi.getAuth().then(data => {
    let {id, email, login} = data.data;
    dispatch(setAuthDataSuc({id, email, login, isAuth: true}));
  });
};
export const postAuthData = (email, password, rememberMe) => dispatch => {
  authApi.postAuth(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthData());
    } else {
      dispatch(stopSubmit('login', {_error: data.resultCode > 0 ? data.messages[0] : 'sum error'}));
    }
  });
};
export const deleteAuthData = () => dispatch => {
  authApi.deleteAuth().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthDataSuc({id: null, email: null, login: null, isAuth: false}));
    }
  });
};
export default authReducer;

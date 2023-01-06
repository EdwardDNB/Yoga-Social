import {authApi} from '../API/api';

let set_AuthData = 'set_AuthData';

export const setAuthDataSuc = ({id, email, login}) => ({
  type: set_AuthData,
  data: {id, email, login},
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
      return {...state, ...action.data, isAuth: true};

    default:
      return state;
  }
};
export const setAuthData = () => dispatch => {
  authApi.getAuth().then(data => {
    let {id, email, login} = data.data;
    dispatch(setAuthDataSuc({id, email, login}));
  });
};
export default authReducer;

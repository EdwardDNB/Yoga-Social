let set_AuthData = 'set_AuthData';

export const setAuthData = ({id, email, login}) => ({type: set_AuthData, data: {id, email, login}});

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

export default authReducer;

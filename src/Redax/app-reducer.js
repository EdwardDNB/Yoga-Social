import {setAuthData} from './auth-reducer';

let set_initial = 'set_initial';

export const setInitialState = () => ({type: set_initial});

let existingStore = {
  initial: false,
};
const initialReducer = (state = existingStore, action) => {
  switch (action.type) {
    case set_initial:
      return {...state, initial: true};
    default:
      return state;
  }
};
export const setInitial = () => dispatch => {
  let promise = [dispatch(setAuthData())];
  Promise.all([promise]).then(() => {
    dispatch(setInitialState());
  });
};

export default initialReducer;

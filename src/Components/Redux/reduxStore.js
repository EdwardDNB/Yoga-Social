import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk"
import {reducer} from "redux-form";
import initialReduser from "./appReduser";

let reducers = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    Sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form:reducer,
    app:initialReduser
})
/*let store = createStore(reducers,applyMiddleware(thunkMiddleware))*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.store = store
export default store
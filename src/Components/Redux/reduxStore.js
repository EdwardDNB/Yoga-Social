import {applyMiddleware, combineReducers, createStore} from "redux";
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
let store = createStore(reducers,applyMiddleware(thunkMiddleware))
window.store = store
export default store
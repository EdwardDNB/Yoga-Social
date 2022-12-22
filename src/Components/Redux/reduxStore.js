import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";

let reducers = combineReducers({
    ProfilePage: profileReduser,
    DialogsPage: dialogReduser,
    Sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser
})
let store = createStore(reducers)
window.store = store
export default store
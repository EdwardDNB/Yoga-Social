import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";
let reducers=combineReducers({
    ProfilePage:profileReduser,
    DialogsPage:dialogReduser,
    Sidebar:sidebarReduser,
    usersPage:usersReduser
})
let store = createStore(reducers)
window.store=store
export default store
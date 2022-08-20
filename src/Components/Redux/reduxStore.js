import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";
let reducers=combineReducers({
    ProfilePage:profileReduser,
    DialogsPage:dialogReduser,
    Sidebar:sidebarReduser
})
let store = createStore(reducers)
window.store=store
export default store
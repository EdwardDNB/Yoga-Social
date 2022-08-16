import {addPostActionCreator, changeActionCreator} from "../../Redux/profileReduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsConteiner = (props) => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            let changePost = (text) => {
                store.dispatch(changeActionCreator(text))
            }
            return <MyPosts updateText={changePost} addPost={addPost}
                            PostData={state.ProfilePage.PostData}
                            text={state.ProfilePage.TextData}/>
        }}
    </StoreContext.Consumer>

}
export default MyPostsConteiner
import {actionAddPost, actionChangePost} from "../../../Redax/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {


    return <StoreContext.Consumer>{(stoke) => {
        let state = stoke.getState()


        let addPost = () => {
            stoke.dispatch(actionAddPost())
        }

        let ChangeMessage = (text) => {
            stoke.dispatch(actionChangePost(text))

        }


        return <Posts ChangeMessage={ChangeMessage} addPost={addPost}
                      PostData={state.ProfileBranch.PostData} TextData={state.ProfileBranch.TextData}/>
    }}</StoreContext.Consumer>

}
export default PostsContainer
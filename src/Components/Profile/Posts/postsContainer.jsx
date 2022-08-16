


import {actionAddPost, actionChangePost} from "../../../Redax/profile-reducer";
import Posts from "./Posts";



const PostsContainer = (props) => {
    let state = props.stoke.getState()



    let addPost = () => {
        props.stoke.dispatch(actionAddPost())
    }

    let ChangeMessage = (text) => {
        props.stoke.dispatch(actionChangePost(text))

    }

    return <Posts ChangeMessage={ChangeMessage} addPost={addPost}
                  PostData={state.ProfileBranch.PostData} TextData={state.ProfileBranch.TextData}/>

}
export default PostsContainer
import {actionAddPost, actionChangePost} from "../../../Redax/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(actionAddPost())
        },
        ChangeMessage: (text) =>
            dispatch(actionChangePost(text))
    }
}
let mapStateToProps = (state) => {
    return {
        PostData: state.ProfileBranch.PostData,
        TextData: state.ProfileBranch.TextData
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsContainer
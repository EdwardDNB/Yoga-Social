import {addPostActionCreator} from "../../Redux/profileReduser";
import MyPosts from "./MyPosts";
/*import StoreContext from "../../../StoreContext";*/
import {connect} from "react-redux";


/*
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
*/

let mapStateToProps = (state) => {
    return {
        PostData: state.ProfilePage.PostData,
        text: state.ProfilePage.TextData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        }
    }}
    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


    export default MyPostsContainer
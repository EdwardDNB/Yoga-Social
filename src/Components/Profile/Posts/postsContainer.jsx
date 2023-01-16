import {actionAddPost} from '../../../Redax/profile-reducer';
import Posts from './Posts';
import {connect} from 'react-redux';

let mapDispatchToProps = dispatch => {
  return {
    addPost: Message => {
      dispatch(actionAddPost(Message));
    },
  };
};
let mapStateToProps = state => {
  return {
    PostData: state.ProfileBranch.PostData,
    TextData: state.ProfileBranch.TextData,
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;

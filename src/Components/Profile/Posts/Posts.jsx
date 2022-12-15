import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = props => {
  let PostElement = props.PostData.map(p => (
    <Post key={p.message} postCount={p.postCount} message={p.message} likesCount={p.likesCount} />
  ));

  let addPost = () => {
    props.addPost();
  };

  let ChangeMessage = e => {
    let text = e.target.value;
    props.ChangeMessage(text);
  };

  return (
    <div className={s.content}>
      My post
      <div>
        New post
        <div>
          <textarea onChange={ChangeMessage} value={props.TextData} cols="30" rows="10"></textarea>
          <button onClick={addPost}>Send</button>
        </div>
      </div>
      {PostElement}
    </div>
  );
};
export default Posts;

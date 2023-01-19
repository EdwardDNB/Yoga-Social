import Post from './Post/Post';
import s from './Posts.module.css';
import {Field, reduxForm} from 'redux-form';
import {maxFieldValue, required} from '../../Validation/Validation';
import {Textarea} from '../../Validation/FormFields';

const Posts = props => {
  let PostElement = props.PostData.map(p => (
    <Post key={p.message} postCount={p.postCount} message={p.message} likesCount={p.likesCount} />
  ));
  const onSubmit = formData => {
    props.addPost(formData.ChangeMessage);
  };
  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <ReduxFormMessageSubmit onSubmit={onSubmit} />
      {PostElement}
    </div>
  );
};
const postForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'ChangeMessage'}
        placeholder={'Write message'}
        validate={[required, maxFieldValue(10)]}
        component={Textarea}
      />
      <button>Send</button>
    </form>
  );
};
export const ReduxFormMessageSubmit = reduxForm({form: 'post'})(postForm);

export default Posts;

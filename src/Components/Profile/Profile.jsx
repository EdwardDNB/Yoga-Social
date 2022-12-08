import s from './Profile.module.css';
import PostsContainer from './Posts/postsContainer';
import ProfileImg from '.././Pictures/istockphoto-160797335-612x612.jpg';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={ProfileImg} alt={''} />
      </div>
      <div>ava + description</div>
      <PostsContainer />
    </div>
  );
};
export default Profile;

import ProfileImg from '../Pictures/istockphoto-160797335-612x612.jpg';
import s from './Profile.module.css';
const Profile = props => {
  for (let key in props.ProfileData.contacts) {
    if (props.ProfileData.contacts[key] !== null) {
      if (!props.ProfileData.contacts[key].includes('https://')) {
        props.ProfileData.contacts[key] = 'https://'.concat(props.ProfileData.contacts[key]);
      }
    }
  }
  console.log(props.ProfileData.contacts);
  return (
    <div>
      <div>
        <img src={ProfileImg} alt={''} />
      </div>
      <div>
        <div className={s.content}>
          <img src={props.ProfileData.photos.large} />
        </div>
        <h3>{props.ProfileData.fullName}</h3>
        <div>
          <h4>Contacts</h4>
        </div>
        <div>{props.ProfileData.lookingForAJob}</div>
        <div>{props.ProfileData.aboutMe}</div>
      </div>
    </div>
  );
};
export default Profile;

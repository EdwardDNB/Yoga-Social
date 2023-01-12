import ProfileImg from '../Pictures/istockphoto-160797335-612x612.jpg';
import DefaultImg from '../Pictures/UserDefaultPic.png';
import s from './Profile.module.css';
import React from 'react';
import Contacts from './Contacts';
import Status from './Status';

const Profile = props => {
  for (let key in props.ProfileData.contacts) {
    if (props.ProfileData.contacts[key] !== null) {
      if (!props.ProfileData.contacts[key].includes('https://')) {
        props.ProfileData.contacts[key] = 'https://'.concat(props.ProfileData.contacts[key]);
      }
    }
  }
  let contactsElement = Object.entries(props.ProfileData.contacts).map((v, key) => (
    <Contacts key={key} k={v[0]} v={v[1]} />
  ));

  return (
    <div>
      <div>
        <img src={ProfileImg} alt={''} />
      </div>
      <div>
        <div className={s.content}>
          <img
            src={props.ProfileData.photos.large ? props.ProfileData.photos.large : DefaultImg}
            alt={''}
          />
        </div>
        <h3>{props.ProfileData.fullName}</h3>
        <Status ProfileStatus={props.ProfileStatus} setProfileStatus={props.setProfileStatus} />
        <div className={s.contacts}>{contactsElement}</div>
        <div>{props.ProfileData.lookingForAJob}</div>
        <div>{props.ProfileData.aboutMe}</div>
      </div>
    </div>
  );
};
export default Profile;

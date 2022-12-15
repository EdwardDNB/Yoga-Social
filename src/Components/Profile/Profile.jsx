import ProfileImg from '../Pictures/istockphoto-160797335-612x612.jpg';
import s from './Profile.module.css';
import FacebookImg from './../Pictures/Facebook_f_logo_(2019).svg';
import React from 'react';

const Profile = props => {
  for (let key in props.ProfileData.contacts) {
    if (props.ProfileData.contacts[key] !== null) {
      if (!props.ProfileData.contacts[key].includes('https://')) {
        props.ProfileData.contacts[key] = 'https://'.concat(props.ProfileData.contacts[key]);
      }
    }
  }
  const Contact = props => {
    if (props.v !== null) {
      return (
        <span>
          <a href={props.v}>
            <img src={FacebookImg} alt={props.k} />
          </a>
        </span>
      );
    }
  };
  let contactsElement = Object.entries(props.ProfileData.contacts).map((v, key) => (
    <Contact key={key} k={v[0]} v={v[1]} />
  ));

  //console.log(props.ProfileData.contacts);
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
        <div className={s.contacts}>{contactsElement}</div>
        <div>{props.ProfileData.lookingForAJob}</div>
        <div>{props.ProfileData.aboutMe}</div>
      </div>
    </div>
  );
};
export default Profile;

import FacebookImg from '../Pictures/Facebook_f_logo_(2019).svg';
import React from 'react';

const Contacts = props => {
  if (props.v !== null)
    return (
      <span>
        <a href={props.v}>
          <img src={FacebookImg} alt={props.k} />
        </a>
      </span>
    );
};
export default Contacts;

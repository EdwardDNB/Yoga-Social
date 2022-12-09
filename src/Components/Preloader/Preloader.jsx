import PreloaderImg from '../Pictures/Infinity-1s-200px.svg';
import React from 'react';
import s from './PreloaderImg.css';

let Preloader = props => {
  return (
    <div className={s.PreloaderImg}>
      <img src={PreloaderImg} />
    </div>
  );
};
export default Preloader;

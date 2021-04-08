import React from 'react';
import loader from '../../assets/loader.svg';

export default function Loader({size = 150}) {
  return <img className="loader-img" src={loader} width={size} height={size} alt="Loader" />;
}

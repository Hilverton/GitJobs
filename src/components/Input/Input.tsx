import React from 'react';

import './styles.css';

type InputProps = {
  icon: string;
  placeholder: string;
};

export default function Input({ icon, placeholder }: InputProps) {
  return (
    <div className='input'>
      <i className={`input__icon ${icon}`}></i>
      <input className='input__input' placeholder={placeholder} type='text' />
    </div>
  );
}

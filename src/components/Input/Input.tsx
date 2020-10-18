import React, { InputHTMLAttributes } from 'react';

import './styles.css';

export default function Input({
  icon,
  placeholder,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return (
    <div className='input'>
      <i className={`input__icon ${icon}`}></i>
      <input
        className='input__input'
        placeholder={placeholder}
        {...props}
        type='text'
      />
    </div>
  );
}

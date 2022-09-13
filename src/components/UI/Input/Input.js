import React from 'react'
import styles from './Input.module.scss'

const Input = ({ placeholder, type, className, onChangeHandler, ...props }) => {
  return <input className={styles.Input} placeholder={placeholder} type={type} {...props} onChange={onChangeHandler} />;
};

export default Input
import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './LoginForm.module.scss';

const initialState = {
  login: '',
  password: '',
};

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(initialState);

  const handleFormInput = ({ target: { value, name } }) => {
    setLoginForm(prevState => ({ ...prevState, [name]: value }));
  };

  const sendForm = e => {
    e.preventDefault();
    console.log(loginForm);
    console.log('sent');
  };

  return (
    <form className={styles.LoginFormWrapper} onSubmit={sendForm}>
      <Input
        onChangeHandler={handleFormInput}
        style={{ marginBottom: 32 }}
        placeholder="Login"
        name="login"
        type="text"
      />
      <Input
        onChangeHandler={handleFormInput}
        style={{ marginBottom: 32 }}
        className={styles.LoginFormInput}
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button text="Login" type="submit" />
    </form>
  );
};

export default LoginForm;

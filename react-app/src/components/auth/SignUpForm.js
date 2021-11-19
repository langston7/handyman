import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Passwords do not match."])
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='body-container'>
      <form onSubmit={onSignUp} className='auth-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='auth-field'>
          <label>First Name <span>(Max. 20 Characters)</span></label>
          <input
            type='text'
            name='first_name'
            onChange={updateFirstName}
            value={first_name}
            maxLength="20"
            required={true}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Last Name <span>(Max. 20 Characters)</span></label>
          <input
            type='text'
            name='last_name'
            onChange={updateLastName}
            value={last_name}
            maxLength="20"
            required={true}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Email <span>(Max. 40 Characters)</span></label>
          <input
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
            maxLength="40"
            required={true}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>

  );
};

export default SignUpForm;

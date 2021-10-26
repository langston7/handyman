import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const TaskerSignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [bio, setBio] = useState('');
  const [availableStart, setAvailableStart] = useState('');
  const [availableEnd, setAvailableEnd] = useState('');
  const [state, setState] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
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

  const updateBio = (e) => {
    setBio(e.target.value);
  }

  const updateAvailableStart = (e) => {
    setAvailableStart(e.target.value)
  }

  const updateAvailableEnd = (e) => {
    setAvailableEnd(e.target.value);
  }

  const updateState = (e) => {
    setState(e.target.value);
  }

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
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='auth-field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label className='auth-field'>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label className='auth-field'>Enter a short bio about yourself</label>
          <input
            type='text'
            name='bio'
            onChange={updateBio}
            value={bio}
          >
          </input>
        </div>
        <div>
          <label className='auth-field'>Enter the state you live in</label>
          <input
            type='text'
            name='bio'
            onChange={updateState}
            value={state}
          ></input>
        </div>
        <div>
          <label className='auth-field'>Enter what time you'd like to start taking tasks</label>
          <input
            type='integer'
            name='start'
            onChange={updateAvailableStart}
            value={availableStart}
          ></input>
        </div>
        <div>
          <label className='auth-field'>Enter what time you'd like to stop taking tasks</label>
          <input
            type='text'
            name='end'
            onChange={updateAvailableEnd}
            value={availableEnd}
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>

  );
};

export default TaskerSignUpForm;

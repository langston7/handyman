import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUpTasker } from '../../store/session';

const TaskerSignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [bio, setBio] = useState('');
  const [state, setState] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const states=['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
    'Connecticut','Delaware', 'Florida','Georgia', 'Hawaii','Idaho',
    'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
    'Maryland','Massachusetts','Michigan','Minnesota', 'Mississippi','Missouri',
    'Montana','Nebraska','Nevada','New Hampshire', 'New Jersey','New Mexico',
    'New York','North Carolina','North Dakota', 'Ohio','Oklahoma','Oregon',
    'Pennsylvania', 'Rhode Island','South Carolina','South Dakota','Tennessee',
    'Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
    'West Virginia','Wisconsin','Wyoming'
  ]

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUpTasker(first_name, last_name, email, password, bio, state));
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

  const updateBio = (e) => {
    setBio(e.target.value);
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
          <label>First Name</label>
          <input
            required
            type='text'
            name='first_name'
            onChange={updateFirstName}
            value={first_name}
            maxLength="20"
          ></input>
        </div>
        <div className='auth-field'>
          <label>Last Name</label>
          <input
            required
            type='text'
            name='last_name'
            onChange={updateLastName}
            value={last_name}
            maxLength="20"
          ></input>
        </div>
        <div className='auth-field'>
          <label>Email</label>
          <input
            required
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
            maxLength="40"
          ></input>
        </div>
        <div className='auth-field'>
          <label>Password</label>
          <input
            required
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
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
        <div className='auth-field'>
          <label>Enter a short bio about yourself</label>
          <textarea
            className="bio-textfield"
            required
            name='bio'
            onChange={updateBio}
            value={bio}
            maxLength="400"
          >
          </textarea>
        </div>
        <div className='auth-field'>
          <label>Enter the state you live in</label>
          <select
            required
            name='state'
            onChange={updateState}
          >
            <option disabled selected value> -Select your State- </option>
            {states.map((state) =>
              <option key={state} value={state}>{state}</option>
            )}
          </select>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>

  );
};

export default TaskerSignUpForm;

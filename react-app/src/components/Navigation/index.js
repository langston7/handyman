import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './navigation.css'
import { useEffect } from "react";
import { getTaskerByUserID } from '../../store/tasker';

const Navigation = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);
  const tasker = useSelector(state => state.taskers);


  useEffect(()=> {
    if(user?.is_tasker){ dispatch(getTaskerByUserID(user?.id)) }
  }, [dispatch, user])


  return (
    <nav className='nav-container'>
      <div className='nav-inner'>
        <NavLink to='/' exact={true} className='nav-link logo'>
          HandyMan
        </NavLink>
        {user?.is_tasker ?
          <div className='nav-link-container'>
            <NavLink to={`/tasker/${tasker?.id}`} className='nav-link'>My Profile</NavLink>
            <LogoutButton/>
          </div>
            :
         user ?
          <div className='nav-link-container'>
            <NavLink to='/booking' className='nav-link'>Book a task</NavLink>
            <NavLink to='/user/orders' className='nav-link'>My Orders</NavLink>
            <LogoutButton/>
          </div>
            :
          <div className='nav-link-container'>
            <NavLink to='/services' className='nav-link'>
              Services
            </NavLink>
            <NavLink to='/sign-up' className='nav-link'>Sign up</NavLink>
            <NavLink to='/login' className='nav-link'>Log in</NavLink>
            <NavLink to='/tasker-enrollment' className='nav-button'>Become a Tasker</NavLink>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navigation

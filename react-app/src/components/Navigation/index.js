import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './navigation.css'

const Navigation = () => {
  const user = useSelector(state => state.session.user);


  return (
    <nav className='nav-container'>
      <div className='nav-inner'>
        <NavLink to='/' exact={true} className='nav-link'>
          HandyMan
        </NavLink>
        {user ?
          <div className='nav-link-container'>
            <NavLink to='/booking' className='nav-link'>Book a task</NavLink>
            <NavLink to='/user/orders' className='nav-link'>My Orders</NavLink>
            {//<NavLink to='/user/profile' className='nav-link'>Profile</NavLink>
}
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

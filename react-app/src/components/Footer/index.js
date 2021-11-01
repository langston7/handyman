import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {


  return(
    <div className="footer-container">
      <a href="https://github.com/langston7/handyman">Github</a>
      <NavLink to={'/about'}>
        About
      </NavLink>
    </div>
  )
}


export default Footer

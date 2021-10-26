import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../store/category"
import './services.css'

function Services(){
  const dispatch = useDispatch()
  const categories = useSelector(state => Object.values(state.categories))

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return(
    <div className='body-container'>
      <div className='services-banner'>
        <div className='banner-quote'>What do you need help with?</div>
      </div>
      <div>Let Handymen help tackle your to-do list!</div>
      <div className='services-body'>
        {categories?.map((category) =>
          <div className="services-card">
            <img className="services-img" src={category.img_src} alt="category"></img>
            <div className="services-name">{category.name}</div>
          </div>
        )}
      </div>
    </div>
  )

}


export default Services

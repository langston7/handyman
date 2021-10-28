import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category";
import './home.css'

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories));
  const [currCatName, setCurrCatName] = useState(categories[0]?.name)

  const handleChange = (e) => {
    setCurrCatName(e.target.value)
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (

    <div className="body-container">
      <div className="home-heading">
        <div className="home-heading-inner">
          <h2>Help when you need it, at your fingertips</h2>
          <h4>Get help around the house from a trusted Handyman.  From furniture assembly to moving to yardwork, and more</h4>
          <div className="hh-search">
            <div className="hh-search-bar">
            <select
              name='category_id'
              value={currCatName}
              onChange={handleChange}
              className="preform-select"
            >
              {categories.map((category) =>
                <option value={category.name}>{category.name}</option>
              )}
            </select>
            <a href={`/form?category=${currCatName}`}
              className="preform-button"
            >
              Get started
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

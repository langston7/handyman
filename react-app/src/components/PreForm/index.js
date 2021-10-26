import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category";
import { Link } from "react-router-dom";
import './preform.css'

function PreForm(){
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories));
  const [currCatName, setCurrCatName] = useState(categories[0]?.name)

  const handleChange = (e) => {
    setCurrCatName(e.target.value)
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return(
    <div className="body-container">
      <h2>Book Your Next Task</h2>
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
      <Link to={{
        pathname:`/form?category=${currCatName}`,
        state:categories
      }} className="preform-button">
        Get started
      </Link>
    </div>

  )
}


export default PreForm

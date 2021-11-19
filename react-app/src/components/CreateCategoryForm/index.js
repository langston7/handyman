import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCategories } from "../../store/category";
import { getTaskerByUserID } from '../../store/tasker';
import "./CategoryForm.css"

function CreateCategoryForm(){
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const tasker = useSelector(state => state.taskers);
  const categories = useSelector(state => Object.values(state.categories));
  const myCategories = categories.filter((category) => category.tasker_id === tasker.id)

  const [category, setCategory] = useState('');

  const updateCategory = e => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    dispatch(getCategories());
    if(user?.is_tasker){ dispatch(getTaskerByUserID(user?.id)) }
  }, [dispatch, user])

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/categories/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category,
        img_src: "https://icon-library.com/images/icon-hammer/icon-hammer-10.jpg",
        tasker_id: tasker.id
      })
    });
    dispatch(getCategories())
  }

  const handleDelete = async e => {
    e.preventDefault();
    await fetch(`/api/categories/${e.target.value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    history.push('/new-category')
    dispatch(getCategories())
  }

  return (
    <div className="body-container">
      <h2>Enter the task you're available for assisting with:</h2>
      <form className="category-form">
        <input
          maxLength='20'
          value={category}
          onChange={updateCategory}
          required
        ></input>
        <button onClick={handleSubmit}>Create Category</button>
      </form>

      <div className="my-categories">
        <h2>Task categories you've created:</h2>
        {myCategories.map((category) =>
        <div className='category-card'>
          <div>{category.name}</div>
          <button
            value={category.id}
            onClick={handleDelete}
          >Delete this Category</button>
        </div>
        )}
      </div>
    </div>
  )

}

export default CreateCategoryForm

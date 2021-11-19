import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskerByUserID } from '../../store/tasker';

function CreateCategoryForm(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const tasker = useSelector(state => state.taskers);
  const [category, setCategory] = useState('');

  const updateCategory = e => {
    setCategory(e.target.value)
  }

  useEffect(() => {
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
  }

  return (
    <div>
      <h2>Enter the task you're available for assisting with:</h2>
      <form>
        <input
          maxLength='200'
          className="review-content"
          value={category}
          onChange={updateCategory}
          required
        ></input>
        <button onClick={handleSubmit}></button>
      </form>

    </div>
  )

}

export default CreateCategoryForm

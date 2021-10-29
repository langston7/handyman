import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category";
import './home.css'

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const taskers = useSelector(state => Object.values(state.taskers));
  const thisTasker = taskers?.filter((tasker) => tasker.user_id === user?.id)[0];
  const categories = useSelector(state => Object.values(state.categories));
  const orders = useSelector(state => Object.values(state.orders));
  const myOrders = orders?.filter((order) => order.tasker_id === thisTasker?.id);
  const [currCatName, setCurrCatName] = useState(categories[0]?.name)

  const handleChange = (e) => {
    setCurrCatName(e.target.value)
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <div className="body-container">
      {user?.is_tasker ?
      <div>
        <h2 className="">Welcome back, {user?.first_name}.</h2>
        <h3>Your upcoming Orders:</h3>
        <div className="orders-container">
          {myOrders ?
            myOrders?.map((order) =>
              <div>You have an appointment with {order.user_FN} {order.user_LN} on {order.date} at {order.time}.</div>
            )
            :
            <div>You have no upcoming orders.</div>
          }
        </div>
      </div>
      :
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
      }
    </div>

  )
}

export default Home

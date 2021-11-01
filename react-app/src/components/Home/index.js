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
  const [currCatName, setCurrCatName] = useState("Mounting")

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
      <div>
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
                  <option key={category.id} value={category.name}>{category.name}</option>
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
        <div className="home-body">
          <div className="home-splash-1">
            <h2>Connect to skilled individuals</h2>
            <div className="home-chunk">
              <img alt="a" src="https://media.istockphoto.com/illustrations/simple-map-of-united-states-illustration-id501650810"></img>
              <div>Get paired with handymen from every state in the country.</div>
            </div>
          </div>
          <div className="home-splash-2">
            <h2>Book anytime you need</h2>
            <div className="home-chunk">
              <div>Find out what taskers are available at any time you need down to the hour.</div>
              <img alt="a" src="https://m.media-amazon.com/images/I/71xZGIxwOXL._AC_SX466_.jpg"></img>
            </div>
          </div>
          <div className="home-splash-3">
            <h2>Know before you book</h2>
            <div className="home-chunk">
              <img alt="a" src="https://assets.taskrabbit.com/v3/assets/homepage/michael-valued-tasker@720w.jpg"></img>
              <div>Read and write reviews on how your handyman did.</div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>

  )
}

export default Home

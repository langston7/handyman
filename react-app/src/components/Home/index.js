import './home.css'


const Home = () => {


  return (

    <div className="body-container">
      <div className="home-heading">
        <div className="home-heading-inner">
          <h2>Help when you need it, at your fingertips</h2>
          <h4>Get help around the house from a trusted Handyman.  From furniture assembly to moving to yardwork, and more</h4>
          <div className="hh-search">
            <div className="hh-search-bar">
              <select>
                <option>ABC</option>
                <option>DEF</option>
              </select>
              <button>Get help</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import { NavLink } from "react-router-dom"

const AddLog = () => {
  return (
    <>
    <div className="addlog">
      <div className="records">

        <h2>Lucky: Health Records</h2>

        <div className="buttonss">
          <NavLink to='/petlogs'>
        <button className="button">ADD LOG</button>
          </NavLink>
        <NavLink to='/'>
                <button className="delete">GO BACK</button>
        </NavLink>

        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>
        <div className="card">
          <div className="cardhead">
          <h3>Huberium Celiliutus</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum, facilis voluptatem tempore nesciunt aperiam natus. Quos, accusantium! Totam, amet rem! Quam cum labore numquam. Lorem ipsum dolor sit amet consectetur a</p>
          </div>
          <div className="date">2023-11-08</div>
        </div>

      </div>
      
    </div>
</>
    
  )
}

export default AddLog
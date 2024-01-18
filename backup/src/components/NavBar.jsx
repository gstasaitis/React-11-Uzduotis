import { DiAtom } from "react-icons/di";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="top">
    <div className="navbar">
        <Link to='/'>
            <DiAtom className="atom"/>
        </Link>
        <Link to='/'>
        <h1>vetbee</h1>
        </Link>
    </div>
    </div>
  )
}

export default NavBar
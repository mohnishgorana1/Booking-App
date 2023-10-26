import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' className="logo logoLink">
          <span className="logo">Booking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

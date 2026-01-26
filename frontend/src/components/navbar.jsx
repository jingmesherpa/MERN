import { NavLink } from "react-router-dom";
import "../App.css"
const Navbar = () => {
  return (
    <div className="header">
      <h1>Logo</h1>

      <div className="items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [logout, setLogout] = useState(false);

  const navigate= useNavigate();

  const token = localStorage.getItem("token");
  console.log(token)

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    setLogout(true);
    alert("You have been log out");

    navigate("/login");
  };

  console.log(token);
  return (
    <div className="items">
      <h1>logo</h1>
      <nav className="items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/product"}>Products</NavLink>
        <NavLink to={"/store"}>Store</NavLink>

        
        
        
        {token ? (
          <>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <button onClick={handleLogOut}>Logout</button>
          </>):(
            <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
          </>
          )};





        
        {/* <NavLink to={"/forget-password"}></NavLink> */}
      </nav>
    </div>
  );
};

export default Navbar;
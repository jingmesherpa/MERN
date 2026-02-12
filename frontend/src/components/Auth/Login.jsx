import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1000/user/login", {
        email: email,
        password: password,
      });

      console.log(response);

      const token = response.data.token;
      console.log(token);

      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="header">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          required
          placeholder="Enter your email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          required
          placeholder="Enter your password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <Link to="/forget-password">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
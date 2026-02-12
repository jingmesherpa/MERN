import axios from "axios";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1000/user/forget-password",
        { email }
      );

      alert(response.data.message || "Check your email");
      setEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }


  };

  return (
    <div className="header">
      <h2>Forget Password</h2>
      <form onSubmit={handleForgetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
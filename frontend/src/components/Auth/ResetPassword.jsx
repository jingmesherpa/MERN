import axios from "axios";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Invalid or expired reset link");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:1000/user/reset-password?token=${token}`,
        { password }
      );

      alert(response.data.message || "Password reset successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="header">
      <h2>Reset Password</h2>

      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;

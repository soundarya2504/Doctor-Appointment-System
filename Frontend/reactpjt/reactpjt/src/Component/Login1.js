import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login1.css'
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-password"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
}

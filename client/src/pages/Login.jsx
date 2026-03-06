import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://resume-forge-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/builder");
    } catch (err) {
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="auth-wrapper">

    <h1 className="brand-title">ResumeForge</h1>

    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

    </div>

  </div>
);}

export default Login;
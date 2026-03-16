import React, { useState } from "react";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post("/users/login", {
        email: email
      });

      console.log(response.data);

      alert("Login successful");

      localStorage.setItem("user", JSON.stringify(response.data));

    } catch (error) {

      console.error(error);
      alert("Login failed");

    }
  };

  return (
    <div>

      <h2>User Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
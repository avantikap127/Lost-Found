import React, { useState } from "react";
import API from "../services/api";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    roleId: 1
  });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Register clicked", user);   

  try {
    const res = await API.post("/users/register", user);
    alert("User Registered");
    console.log(res.data);
  } catch(err) {
    console.error(err);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="phone" placeholder="Phone" onChange={handleChange}/>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
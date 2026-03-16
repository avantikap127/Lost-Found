import React from "react";
import Register from "./components/Register";
import ReportLostItem from "./components/ReportLostItem";
import Login from "./components/Login"; 
import ItemList from "./components/ItemList";

function App() {

  return (
    <div>
      <h1>Lost & Found System</h1>

      <Register />
      <Login />
      <ReportLostItem />
      <ItemList />
    </div>
  );
}

export default App;
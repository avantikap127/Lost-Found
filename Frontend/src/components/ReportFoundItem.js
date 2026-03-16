import React, { useState } from "react";
import API from "../services/api";

function ReportFoundItem() {

  const [item, setItem] = useState({
    itemName: "",
    description: "",
    location: "",
    reportedBy: ""
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post("/items/found", item);

      console.log(response.data);
      alert("Found item reported successfully");

      setItem({
        itemName: "",
        description: "",
        location: "",
        reportedBy: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error reporting item");
    }
  };

  return (
    <div>

      <h2>Report Found Item</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={item.itemName}
          onChange={handleChange}
          required
        />

        <br/><br/>

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
          required
        />

        <br/><br/>

        <input
          type="text"
          name="location"
          placeholder="Location Found"
          value={item.location}
          onChange={handleChange}
          required
        />

        <br/><br/>

        <input
          type="number"
          name="reportedBy"
          placeholder="User ID"
          value={item.reportedBy}
          onChange={handleChange}
          required
        />

        <br/><br/>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default ReportFoundItem;
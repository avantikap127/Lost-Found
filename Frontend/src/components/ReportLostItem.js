import React, { useState } from "react";
import API from "../services/api";

function ReportLostItem() {

  const [item, setItem] = useState({
  itemName: "",
  description: "",
  location: "",
  eventDate: "",
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

    console.log("Submitting lost item:", item);

    try {

      const res = await API.post("/items/lost", item);

      console.log(res.data);
      alert("Lost item reported successfully");

    } catch (error) {

      console.error(error);
      alert("Error reporting lost item");

    }

  };

  

  return (
    <div>

      <h2>Report Lost Item</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={item.itemName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={item.location}
          onChange={handleChange}
        />

        <input
          type="number"
          name="reportedBy"
          placeholder="User ID"
          value={item.reportedBy}
          onChange={handleChange}
        />
          <input
          type="date"
          name="eventDate"
          onChange={handleChange}
/>
        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default ReportLostItem;
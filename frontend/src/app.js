import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ name: "", role: "", status: "starter" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the backend API
    axios
      .post("https://backend-url.com/api/submit", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log("Data submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <div>
      <h1>Starter/Leaver Submission</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        <br />
        <label>Role:</label>
        <input type="text" name="role" value={data.role} onChange={handleChange} />
        <br />
        <label>Status:</label>
        <select name="status" value={data.status} onChange={handleChange}>
          <option value="starter">Starter</option>
          <option value="leaver">Leaver</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

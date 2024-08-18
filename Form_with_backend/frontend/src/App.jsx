import React, { useState } from "react";
import axios from "axios";  // Import axios

const App = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      // Optionally reset the form after successful submission
      setFormData(initialState);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="container">
      <form className="shadow p-4" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            id="fname"
            type="text"
            name="fname"
            value={formData.fname}
            placeholder=""
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            id="lname"
            type="text"
            name="lname"
            value={formData.lname}
            placeholder=""
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="lname">Last Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder=""
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            id="phone"
            type="number"
            name="phone"
            value={formData.phone}
            placeholder=""
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

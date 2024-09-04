import { useEffect, useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setValue((prevValue) => prevValue + 1);
    setSubmittedData((prevData) => [...prevData, { ...data, id: value }]);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (submittedData.length > 0) {
      console.log(submittedData);
    }
  }, [submittedData]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <h4>Form Data API</h4>
        {/* Name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" id="name" name="name" required />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" required />
        </div>
        {/* Password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-input" id="password" name="password" required />
        </div>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;

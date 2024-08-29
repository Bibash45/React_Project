import React, { useContext } from "react";
import { GlobalContext } from "./Context";

const Test = () => {
  const { name, setName } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = new FormData(e.currentTarget);
    setName(newData.get("name"));
  };
  return (
    <div>
      <h2>Name: {name}</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="name"
        placeholder="Enter Name" />
        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Change Name
        </button>
      </form>
    </div>
  );
};

export default Test;

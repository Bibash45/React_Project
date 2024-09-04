import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("bibash")[0];
  // console.log(value)

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>useState basics</h2>
      <h4>You clicked {count}</h4>
      <button className="btn" type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;

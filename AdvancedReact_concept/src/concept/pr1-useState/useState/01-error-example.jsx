import { useState } from "react";
const ErrorExample = () => {
  let count = 0;
  return (
    <div>
      <h1>useState error example</h1>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          count = count + 1;
          console.log(count)
        }}
      >
        Increase
      </button>
      <br />
      <button
        className="btn"
        onClick={() => {
          count = count - 1;
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ErrorExample;

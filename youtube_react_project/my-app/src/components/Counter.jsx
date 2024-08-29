import React, { useCallback, useMemo, useRef, useState } from "react";

function Counter() {
  const num = useRef(0);
  const [number, setNumber] = useState(0);

  // Initialize an array to store Fibonacci numbers
  const fibMemo = useRef([0, 1]);

  const fibFx = useCallback(function fib(n) {
    if (fibMemo.current[n] !== undefined) {
      // If already calculated, return the memoized value
      return fibMemo.current[n];
    }
    // Otherwise, calculate and store the result
    fibMemo.current[n] = fib(n - 1) + fib(n - 2);
    return fibMemo.current[n];
  }, []);

  function handleIncrease(e) {
    e.stopPropagation();
    setTimeout(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 2000);
    num.current++;
    console.log(num.current);
  }

  function handleDecrease(e) {
    e.stopPropagation();
    setNumber((prevNumber) => prevNumber - 1);
  }

  const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);

  return (
    <>
      <h1>
        {number} | {fibMemoized}
      </h1>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </>
  );
}

export default Counter;

import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setState(!state)}>
        Toggle Component
      </button>
      {state && <RandomFunction />}
    </div>
  );
};

const RandomFunction = () => {
  useEffect(() => {
    const someFunc = ()=>{
      // some logic
    }
    window.addEventListener('scroll',someFunc);
    return ()=> window.removeEventListener('scroll',someFunc)
  }, []);

  return <h2>Hello there </h2>;
};
export default CleanupFunction;

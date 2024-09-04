import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = ()=>{
    setTimeout(()=>{
      setValue((prev)=>prev + 1)
    },[3000])
 
   console.log(value)
  }
  return <div>
    <h2>useState "gotcha"</h2>
    <h1>{value}</h1>
    <button className="btn" type="button" onClick={handleClick}>Increse</button>
  </div>;
};

export default UseStateGotcha;

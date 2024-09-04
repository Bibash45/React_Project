import { useState } from "react";

const ToggleChallenge = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <h2>toggle challenge</h2>

      <button onClick={() => setState(!state) }type="button" className="btn ">toggle</button>
      {state && <Toggle />}
    </div>
  );
};

const Toggle = () => {
  return (
    <div style={{margin:'1rem'}} className="alert alert-danger">
      here i am toggle
    </div>
  );
};
export default ToggleChallenge;

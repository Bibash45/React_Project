import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [condition, setCondition] = useState("");
  //truthy
  const [text, setText] = useState("Bibash");
  
  const codeExample = text || "Hello world";

  return (
    <div>
      <h2>short circuit overview</h2>
      <h4>Falsy OR : {text || "Hello world"}</h4>
      <h4>Falsy AND : {text && "Hello world"}</h4>
      <h4>Truthy OR :{condition || "Hello world"}</h4>
      <h4>Truthy AND :{condition && "Hello world"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;

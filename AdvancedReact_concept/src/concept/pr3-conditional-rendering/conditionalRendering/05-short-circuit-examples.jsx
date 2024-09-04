import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Bibash");
  const [user, setUser] = useState({ name: "Dipesh" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{name || "default value"}</h2>

      {user && <SomeComponent name={user.name} text={text} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Save"}</button>
   <hr style={{margin:'2rem'}} />
      {user ? (
        <div>
          <h2>Hello there {name}</h2>
        </div>
      ) : (
        <div>
          <h2>Hey, You need to login </h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;

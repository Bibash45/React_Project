import { useEffect } from "react";
import { useState } from "react";
import { data } from "../../../data.js";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { id: users.length + 2, name: name }]);
    console.log("form submitted");
  };
  useEffect(() => {
    console.log("user", users);
  }, [users]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users:</h2>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                setUsers(users.filter((u) => u.id != id));
              }} className="btn"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;

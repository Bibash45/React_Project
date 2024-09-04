import { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const url = "https://api.github.com/users";
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        <ul className="users">
          {users.map((user) => {
            const { login, id, avatar_url, html_url } = user;
            console.log(user);
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </ul>
    </section>
  );
};
export default FetchData;

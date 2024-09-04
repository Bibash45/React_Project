import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  return <div>
    {
      
      user ? <div>
        <h4>Hello, there {user.name} </h4>
        <button className="btn" onClick={()=> setUser(null)}>Log Out</button>
      </div> 
      :
      <div>
        <h4>Please Login</h4>
        <button className="btn" onClick={()=>{
          setUser({name:'bibash'})}}>Log In</button>
      </div>
    }
      
  </div>
};

export default UserChallenge;

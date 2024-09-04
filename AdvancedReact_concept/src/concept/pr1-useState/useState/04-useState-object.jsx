import { useState } from 'react';

const UseStateObject = () => {

  const [person,setPerson] = useState({
    name: 'John',
    age: 25,
    hobby: 'read books'
  });
  const {name,age,hobby} = person;

  return <div>
    <h2>useState object example</h2>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <h4>Hobby : {hobby}</h4>
    <button className='btn' onClick={()=>{
      // setPerson({  name: 'Bibash',
      //   age: 19,
      //   hobby: 'playing games'})
      setPerson({...person,name:"dipesh"});
    }}>Show Dipesh</button>
  </div>;
};

export default UseStateObject;

import { Person } from './Person';
import React from 'react'
import { useState } from 'react';
import { people } from '../../../data';

const List = () => {
    const [user,setUser] = useState(people)
  return <div>
  {user.map((item) => {
    return <Person   {...item}  />;
  })}
</div>
}

export default List

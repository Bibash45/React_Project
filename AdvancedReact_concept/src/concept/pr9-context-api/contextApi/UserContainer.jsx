import React from 'react'
import { useAppHook } from './Hooks/useAppHooks';

const UserContainer = () => {
   const {user,logout} = useAppHook();
   console.log(user);
  return <div className="user-container">
    <p>{!user ? 'Please login' : 'Hello There,' + user.name}</p>
    <button className='btn' onClick={logout}>{!user ? 'login' : 'logout'}</button>
    
  </div>
}

export default UserContainer

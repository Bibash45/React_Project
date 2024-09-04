import React from "react";
import avatar from '../../../assets/default-avatar.svg';
export function Person({
  id,
  name,
  nickName,
  images,
}) {
  return <div>
      <img src={images?.[0]?.small?.url || avatar} alt="avatar" style={{width: '100px', height
      : '100px'}} />
    <h1>Name: {name}</h1>
    <h2>Nickname: {nickName}</h2> 
    <hr />
  </div>;
}
  
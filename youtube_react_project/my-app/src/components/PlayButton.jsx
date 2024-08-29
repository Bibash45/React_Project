import React, {  memo, useState } from "react";
import "./PlayButton.css";
import UseThemeHook from "./hooks/UseThemeHook";

const PlayButton = memo(function PlayButton({ children, onClick, onPlay, onPause }) {

  const themeContext = UseThemeHook();
  console.log("render playbutton")
  
  const [playState, setPlayState] = useState(true);
    

  function handlClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (playState) {
      onPlay();
    } else {
      onPause();
    }
    setPlayState(!playState);
  }
  return (
    <>
      <button className={themeContext} onClick={handlClick}> {playState ? <i className="fa-solid fa-play">&nbsp; Play</i> : <i className="fa-solid fa-pause">&nbsp; Pause</i>}</button>
    </>
  );
}
);
export default PlayButton;

import React, { useEffect } from "react";
import "./Video.css";
import UseVideoDispatch from "./hooks/VideoDispatchHooks";
import UseThemeHook from "./hooks/UseThemeHook";

const Video = React.memo(function Video({
  title,
  imgLink,
  channel,
  views,
  time,
  verified,
  id,
  children,
  editVideo,
}) {
  console.log("render videos")
  const themeContext = UseThemeHook();
  const dispatchVideo = UseVideoDispatch();

  useEffect(() => {
  //   const idx = setInterval(() => {
  //     // console.log('video playing', id);
  //   }, 3000);
  //   return () => {
  //     clearInterval(idx);
  //   };
  setTimeout(()=>{
    console.log('video playing', id);
  },400)
  }, [id]);


  return (
    <div className="container">
      <button
        className="close"
        onClick={() => {
          dispatchVideo({ type: "DELETE", payload: id });
        }}
      >
        X
      </button>
      <button className="edit" onClick={() => editVideo(id)}>
        Edit
      </button>
      <div className="pic">
        <img src={imgLink} title={title} alt={title} />
      </div>
      <div className={`title ${themeContext}`}>{title}</div>
      <div className={`channel ${themeContext}`}>
        {channel}
        {verified && "✅"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
});

export default Video;

import React, {  useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import UseVideoDispatch from "./hooks/VideoDispatchHooks";
import UseThemeHook from "./hooks/UseThemeHook";
function AddVideo({ updateVideo,editableVideo }) {

  const inputRef = useRef(null);

  const themeContext = UseThemeHook();
  const dispatchVideo = UseVideoDispatch();

  const initialState = {
    time: "1 days ago",
    channel: "Bibash",
    verified: true,
    title: "",
    views: "",
    imgLink: "",
  };
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      dispatchVideo({ type: "ADD", payload: video });
    }
    setVideo(initialState);
    // console.log(video);
  }
  function handleChange(e) {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    // inputRef.current.value="Ridil";
    inputRef.current.focus();
    inputRef.current.placeholder='';
    const animationTitle = "text here".split('');
    animationTitle.forEach((char,i)=>{
      setTimeout(()=>{
        inputRef.current.placeholder=inputRef.current.placeholder + char;

      },200*i)
    })
    

    
  }, [editableVideo]);

  return (
    <form>
      <input ref={inputRef} className={`i-${themeContext}`}
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="title"
        value={video.title}
      />
      <input className={`i-${themeContext}`}
        type="text"
        onChange={handleChange}
        name="views"
        placeholder="views"
        value={video.views}
      />
      <input className={`i-${themeContext}`}
        type="text"
        onChange={handleChange}
        name="imgLink"
        placeholder="img-link"
        value={video.imgLink}
      />
      <button
      className={`b-${themeContext}`}
        onClick={handleSubmit}
      >
        {editableVideo ? "Edit" : "Add"} Videos
      </button>
    </form>
  );
}

export default AddVideo;

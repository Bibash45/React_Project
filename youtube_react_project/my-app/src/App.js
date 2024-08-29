import React, { useCallback, useReducer, useState } from "react";
import "./App.css";
// import { videoDB } from "./data/data.jsx";
import AddVideo from "./components/AddVideo.jsx";
import VideoList from "./components/VideoList.jsx";
import ThemeContext from "./context/ThemeContext.jsx";
import VideosContext from "./context/VideosContext.jsx";
import VideoDispatchContext from "./context/VideoDispatchContext.jsx";
import Counter from "./components/Counter.jsx";
function App() {
  const [videos, dispatchVideo] = useReducer(videoReducer, []);

  const [editableVideo, dispatchEditableVideo] = useReducer(
    editVideoReducer,
    null
  );

  const [mode, setMode] = useState("darkMode");

  // const themeContext = useContext(ThemeContext);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.playload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((item) => item.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);

        return newVideos;
      default:
        return videos;
    }
  }

  function editVideoReducer(editableVideo, action) {
    switch (action.type) {
      case "EDIT":
        return videos.find((video) => video.id === action.payload);
      case "RESET":
        return null;
      default:
        return editableVideo;
    }
  }

  //function for videos state Reducer

  const editVideo = useCallback(function editVideo(id) {
    dispatchEditableVideo({ type: "EDIT", payload: id });
  },[])
  function updateVideo(video) {
    dispatchVideo({ type: "UPDATE", payload: video });

    dispatchEditableVideo({ type: "RESET" }); // Reset editableVideo after update
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatchVideo}>
        <div className={`App ${mode}`} onClick={() => console.log("App")}>
          <button
            className={`buttonMode-${mode}`}
            onClick={() =>
              setMode(mode === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            {mode === "darkMode" ? "Enable Light Mode" : "Enable Dark Mode"}
          </button>
          <AddVideo
            editableVideo={editableVideo}
            updateVideo={updateVideo}
          ></AddVideo>
          <VideoList
            editVideo={editVideo}
          ></VideoList>
        </div>
        <Counter></Counter>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

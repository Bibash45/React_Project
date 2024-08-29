import { useContext } from "react";
import VideosContext from "../../context/VideosContext";

function UseVideos() {
  return useContext(VideosContext);
}

export default UseVideos;
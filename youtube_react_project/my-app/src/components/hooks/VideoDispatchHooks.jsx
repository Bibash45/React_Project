import { useContext } from "react";
import VideoDispatchContext from "../../context/VideoDispatchContext";

function UseVideoDispatch() {
  return useContext(VideoDispatchContext);
}

export default UseVideoDispatch
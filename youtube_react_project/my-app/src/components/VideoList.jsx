import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import PlayButton from "./PlayButton.jsx";
import Video from "./Video.jsx";
import UseVideoDispatch from "./hooks/VideoDispatchHooks.jsx";
import UseVideos from "./hooks/VideosHook.jsx";

function VideoList({ editVideo }) {
  const play = useCallback(() => console.log("Playing"), []);
  const pause = useCallback(() => console.log("Paused"), []);
  
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      Play
    </PlayButton>
  ), [play, pause]);

  const dispatchVideo = UseVideoDispatch();
  const url = "https://my.api.mockaroo.com/video.json?key=5bd073a0";

  const videos = UseVideos();

  useEffect(() => {
    const handleClick = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer YOUR_AUTH_TOKEN`,
          },
        });

        dispatchVideo({ type: "LOAD", payload: response.data });
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    handleClick();
  }, [dispatchVideo, url]);

  const videoComponents = useMemo(() => {
    return videos.map((video) => {
      const videoProps = {
        title: video.title,
        imgLink: video.imgLink,
        views: video.views,
        time: video.time,
        channel: video.channel,
        verified: video.verified,
        id: video.id,
        editVideo: editVideo,
      };

      return (
        <Video key={video.id} {...videoProps}>
          {memoButton}
        </Video>
      );
    });
  }, [videos, memoButton, editVideo]);

  return <>{videoComponents}</>;
}

export default VideoList;

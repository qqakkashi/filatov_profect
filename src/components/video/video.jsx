import { useEffect, useState } from "react";
import { VideoContainer } from "./video.styled";

const Video = (props) => {
  return (
    <VideoContainer controls>
      <source src={props?.src}></source>
    </VideoContainer>
  );
};

export default Video;

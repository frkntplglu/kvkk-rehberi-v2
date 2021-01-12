import React,{useState} from "react";
import ModalVideo from 'react-modal-video'



function VideoPost(props) {
  const [isOpen, setOpen] = useState(false);
  return <div className={`video-post ${props.isFull ? "full" : ""}`}>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.videoID} onClose={() => setOpen(false)} />
    <a href="#" onClick={(e)=> {e.preventDefault(); setOpen(true)}}>
    <div className="video-post-cover">
      <img src={props.videoImage} alt={props.videoTitle} />
    </div>
    <div className="video-post-title">{props.videoTitle}</div>
    </a>
  </div>;

}

export default VideoPost;

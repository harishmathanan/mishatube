import React from 'react';

const VideoView = (props) => {
  if (!props.video) {
    return (
      <div className="vspace-10 text-center">
        Loading...
      </div>
    );
  }

  const video = props.video;
  const videoId = video.id.videoId;
  const videoUrl = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>

      <div className="vspace-10">
        <div>{video.snippet.title}</div>
        <div className="text-muted">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoView;

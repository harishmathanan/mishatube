import React from 'react';

const VideoItem = (props) => {
  const video = props.video;

  return (
    <li className="list-group-item" onClick={() => props.onVideoClick(video)}>
      <img src={video.snippet.thumbnails.default.url} />
      <div>
        <small>
        {video.snippet.title}
        </small>
      </div>
    </li>
  );
}

export default VideoItem;

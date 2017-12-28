import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem
        onVideoClick={props.onVideoClick}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;

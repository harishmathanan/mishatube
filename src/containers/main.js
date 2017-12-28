import React from 'react';
import YoutubeSearch from 'youtube-api-search';
// Components
import Header from '../components/header';
import Search from '../components/search';
import VideoView from '../components/videoView';
import VideoList from '../components/videoList';

const API_KEY = "INSERT YOUR YOUTUBE API KEY HERE";

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onVideoSearch('reactjs'); // initial search
  }

  onVideoSearch(term) {
    YoutubeSearch({key: API_KEY, term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search
          onSearchChange={(term) => this.onVideoSearch(term)} />
        <hr/>

        <div className="row vspace-30">
          <VideoView video={this.state.selectedVideo} />
          <VideoList
            onVideoClick={(video) => this.setState({ selectedVideo: video })}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default Main;

import './App.css';
import React, { Component } from 'react';
// card component
import Card from "./components/Card";
// responsive grid layout
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="App">         
        <Grid container>
          <Grid item xs={12} sm={12} md={6} >
            <Card
              imageURL={'https://adii.me/content/images/2021/01/a2.png'}
              title={'Countdown Announcement - Unlocked'}
              relativeDate={'Last edited 2 days ago'}
              showFavorite={true}
              showMenu={true}
            />
            <Card
              videoURL={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'}
              title={'Countdown Announcement - Unlocked'}
              relativeDate={'Last edited 2 days ago'}
              showFavorite={true}
              showMenu={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Card
              title={'Important announcement'}
              relativeDate={'Last edited 6 days ago'}
              body={'A card is a flexible and extensible content container. It includes a wide variety of content, thumbnails, video, images, subheadings, actions, and content.'}
              showFavorite={true}
              showMenu={true}
            />
            <Card
              title={'Important announcement'}
              relativeDate={'Last edited 4 days ago'}
              showFavorite={false}
              showMenu={true}
            />
            <Card
              title={'Important announcement'}
              relativeDate={'Last edited 1 week ago'}
              showFavorite={false}
              showMenu={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

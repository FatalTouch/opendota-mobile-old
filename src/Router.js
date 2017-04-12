import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './containers/Home';
import SearchResults from './containers/SearchResults';
import PlayerProfile from './containers/PlayerProfile';

const OpenDotaRouter = () => {
  return (
    <Router>
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="searchresults" component={SearchResults} duration={300} />
      <Scene key="playerprofile" component={PlayerProfile} duration={300} />
    </Router>
  );
};

export default OpenDotaRouter;

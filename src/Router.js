import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './containers/Home';
import SearchResults from './containers/SearchResults';

const OpenDotaRouter = () => {
  return (
    <Router>
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="searchresults" component={SearchResults} />
    </Router>
  );
};

export default OpenDotaRouter;

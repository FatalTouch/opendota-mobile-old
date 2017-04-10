import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './containers/Home';

const OpenDotaRouter = () => {
  return (
    <Router>
      <Scene key="home" component={Home} hideNavBar />
    </Router>
  );
};

export default OpenDotaRouter;

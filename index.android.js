import React from 'react';
import { AppRegistry } from 'react-native';
import Opendota from './src/Opendota';

const opendotamobile = () => (
  <Opendota />
);
AppRegistry.registerComponent('opendotamobile', () => opendotamobile);

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text } from 'react-native';

import reducers from './reducers';

const Opendota = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Text>Open dota App</Text>
    </Provider>
  );
};

export default Opendota;

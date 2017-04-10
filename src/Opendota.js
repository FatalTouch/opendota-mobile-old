import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';

import reducers from './reducers';

const Opendota = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Opendota;

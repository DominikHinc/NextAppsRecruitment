import React from 'react';
import {CounterScreen} from './screens/counter-screen/counter-screen';
import {Provider} from 'react-redux';
import {store} from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

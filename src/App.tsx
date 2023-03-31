import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './navigation';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;

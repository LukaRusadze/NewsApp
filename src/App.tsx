import {ThemeProvider} from '@rneui/themed';
import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './navigation';
import {store} from './store';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

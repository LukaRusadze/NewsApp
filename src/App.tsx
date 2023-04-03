import {ThemeProvider} from '@rneui/themed';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import MainStack from './navigation';
import {store} from './store';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <MainStack />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

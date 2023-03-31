import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AfterAuth from './AfterAuth';
import BeforeAuthStack from './BeforeAuth';

const Navigation = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? <BeforeAuthStack /> : <AfterAuth />}
    </NavigationContainer>
  );
};

export default Navigation;

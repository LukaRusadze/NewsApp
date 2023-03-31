import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AfterAuth from './AfterAuth';
import BeforeAuthStack from './BeforeAuth';
import auth from '@react-native-firebase/auth';

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {isSignedIn ? <AfterAuth /> : <BeforeAuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;

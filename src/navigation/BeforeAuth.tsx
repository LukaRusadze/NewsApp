import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import {BeforeAuthStackParamList} from './types';

const Stack = createNativeStackNavigator<BeforeAuthStackParamList>();

const BeforeAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default BeforeAuthStack;

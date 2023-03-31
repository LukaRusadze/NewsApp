import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/BeforeAuth/LoginScreen';
import RegisterScreen from '../screens/BeforeAuth/RegisterScreen';
import {BeforeAuthStackParamList} from './types';

const Stack = createNativeStackNavigator<BeforeAuthStackParamList>();

const BeforeAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default BeforeAuthStack;

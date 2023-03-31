import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NewsScreen from '../screens/NewsScreen';
import {AfterAuthStackParamList} from './types';

const Stack = createNativeStackNavigator<AfterAuthStackParamList>();

const AfterAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'News'} component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default AfterAuth;

import {View} from 'react-native';
import React from 'react';
import {BeforeAuthScreenProps} from '../../../navigation/types';
import {Input} from '@rneui/themed';

type Props = BeforeAuthScreenProps<'Login'>;

const LoginScreen = ({}: Props) => {
  return (
    <View>
      <Input />
    </View>
  );
};

export default LoginScreen;

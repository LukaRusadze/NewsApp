import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BeforeAuthScreenProps} from '../../navigation/types';

type Props = BeforeAuthScreenProps<'Welcome'>;

const WelcomeScreen = ({}: Props) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

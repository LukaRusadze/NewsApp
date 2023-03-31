import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AfterAuthScreenProps} from '../../../navigation/types';
import {Button} from '@rneui/base';
import auth from '@react-native-firebase/auth';

type Props = AfterAuthScreenProps<'News'>;

const NewsScreen = ({}: Props) => {
  return (
    <View>
      <Text>NewsScreen</Text>
      <Button title={'Sign out'} onPress={() => auth().signOut()} />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AfterAuthScreenProps} from '../../../navigation/types';

type Props = AfterAuthScreenProps<'News'>;

const NewsScreen = ({}: Props) => {
  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});

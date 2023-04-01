import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import React from 'react';
import {AfterAuthScreenProps} from '../../../navigation/types';
import {Button} from '@rneui/base';
import auth from '@react-native-firebase/auth';
import {useGetNewsQuery} from '../../../store/features/api/apiSlice';
import ArticleDisplay from '../../../components/ArticleDisplay';

type Props = AfterAuthScreenProps<'News'>;

const NewsScreen = ({}: Props) => {
  const {data} = useGetNewsQuery({page: 1, pageSize: 100});

  const renderItem = ({item}: ListRenderItemInfo<Article>) => (
    <ArticleDisplay article={item} />
  );

  return (
    <FlatList
      data={data?.articles}
      renderItem={renderItem}
      ListHeaderComponent={
        <Button title={'Sign out'} onPress={() => auth().signOut()} />
      }
    />
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});

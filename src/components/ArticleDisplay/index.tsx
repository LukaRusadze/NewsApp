import {
  Modal,
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useMemo, useRef, useState} from 'react';
import {Image} from 'react-native';
import WebView from 'react-native-webview';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Header} from '@rneui/base';
import {Input} from '@rneui/base';
import {
  useAddCommentToArticleMutation,
  useGetArticleDataQuery,
} from '../../store/features/firebaseApi/firebaseSlice';
import {nanoid} from '@reduxjs/toolkit';
import getUuidByString from 'uuid-by-string';

interface Props {
  article: Article;
}

const ArticleDisplay = ({
  article: {title, description, urlToImage, url},
}: Props) => {
  const [modal, setModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  const articleId = useRef(getUuidByString(url));
  const [input, setInput] = useState('');
  const [addComment] = useAddCommentToArticleMutation();

  const {data} = useGetArticleDataQuery(articleId.current);

  const comments = useMemo(
    () => (data ? Object.values(data.comments) : []),
    [data],
  );

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const openComments = () => setCommentsModal(true);
  const closeComments = () => setCommentsModal(false);

  const onCommentPress = async () => {
    try {
      const commentId = nanoid();
      await addComment({
        comment: {
          articleId: articleId.current,
          commentId,
          parentCommentId: '',
          replies: [],
          value: input,
        },
      }).unwrap();
      setInput('');
    } catch (error) {
      console.warn(error);
    }
  };

  // const onChangeText = (text: string) => (valueRef.current = text);

  return (
    <Pressable onPress={openModal} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {urlToImage ? (
        <Image
          source={{uri: urlToImage, height: 665 / PixelRatio.get()}}
          resizeMode={'contain'}
        />
      ) : null}
      <Text>{description}</Text>
      <View style={styles.commentsContainer}>
        <Pressable style={styles.commentContent} onPress={openComments}>
          <EvilIcons name="comment" size={24} color="black" />
          <Text style={styles.commentsText}>{comments.length}</Text>
        </Pressable>
      </View>
      {modal ? (
        <Modal
          onRequestClose={closeModal}
          animationType="slide"
          presentationStyle="pageSheet">
          <WebView originWhitelist={['*']} source={{uri: url}} />
        </Modal>
      ) : null}
      {commentsModal ? (
        <Modal
          onRequestClose={closeComments}
          animationType="slide"
          presentationStyle="pageSheet">
          <Header
            centerComponent={{text: 'Comments', style: {color: 'white'}}}
          />
          {comments.map(item => (
            <Text>{item.value}</Text>
          ))}
          <View style={styles.commentInput}>
            <Input
              onChangeText={setInput}
              value={input}
              placeholder={'Add a comment'}
              rightIcon={{
                name: 'done',
                color: 'black',
                onPress: onCommentPress,
              }}
            />
          </View>
        </Modal>
      ) : null}
    </Pressable>
  );
};

export default memo(ArticleDisplay);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 24,
    padding: 24,
    borderRadius: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  commentsContainer: {
    marginTop: 12,
    zIndex: 2,
  },
  commentInput: {
    flexDirection: 'row',
  },
  commentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsText: {
    color: 'black',
  },
});

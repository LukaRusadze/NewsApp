import {
  Modal,
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {Image} from 'react-native';
import WebView from 'react-native-webview';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

interface Props {
  article: Article;
}

const ArticleDisplay = ({
  article: {title, description, urlToImage, url},
}: Props) => {
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const openComments = () => setComments(true);
  const closeComments = () => setComments(false);

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
        <Pressable onPress={openComments}>
          <EvilIcons name="comment" size={24} color="black" />
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
      {comments ? (
        <Modal
          onRequestClose={closeComments}
          animationType="slide"
          presentationStyle="pageSheet"></Modal>
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
});

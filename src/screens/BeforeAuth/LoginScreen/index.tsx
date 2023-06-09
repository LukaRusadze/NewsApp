import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BeforeAuthScreenProps} from '../../../navigation/types';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {SignInProviders} from '../../../utils/SignInProviders';
import {Button} from '@rneui/base';

GoogleSignin.configure({
  webClientId:
    '331868612385-9r44ncvhmrt47ei8nvqcu2advli42t0s.apps.googleusercontent.com',
});

type Props = BeforeAuthScreenProps<'Login'>;

const LoginScreen = ({}: Props) => {
  const onGoogleSignIn = async () => {
    try {
      await SignInProviders.Google();
    } catch (error) {
      console.warn(error);
    }
  };

  const onFacebookSignIn = async () => {
    try {
      await SignInProviders.Facebook();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={'Facebook Sign In'} onPress={onFacebookSignIn} />
      <GoogleSigninButton onPress={onGoogleSignIn} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

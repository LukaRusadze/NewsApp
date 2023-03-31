import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BeforeAuthScreenProps} from '../../../navigation/types';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {SignInProviders} from '../../../utils/SignInProviders';

GoogleSignin.configure({
  webClientId:
    '331868612385-9r44ncvhmrt47ei8nvqcu2advli42t0s.apps.googleusercontent.com',
});

type Props = BeforeAuthScreenProps<'Login'>;

const LoginScreen = ({}: Props) => {
  const onGoogleSignIn = async () => {
    try {
      const {user} = await SignInProviders.Google();
      console.log(user);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
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

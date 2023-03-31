import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type BeforeAuthStackParamList = {
  Welcome: undefined;
};

type AfterAuthStackParamList = {
  News: undefined;
};

type BeforeAuthNavigationProp<T extends keyof BeforeAuthStackParamList> =
  NativeStackNavigationProp<BeforeAuthStackParamList, T>;

type AfterAuthNavigationProp<T extends keyof AfterAuthStackParamList> =
  NativeStackNavigationProp<AfterAuthStackParamList, T>;

type BeforeAuthRouteProp<T extends keyof BeforeAuthStackParamList> = RouteProp<
  BeforeAuthNavigationProp,
  T
>;

type AfterAuthRouteProp<T extends keyof AfterAuthStackParamList> = RouteProp<
  AfterAuthNavigationProp,
  T
>;

type BeforeAuthScreenProps<T extends keyof BeforeAuthStackParamList> =
  NativeStackScreenProps<BeforeAuthStackParamList, T>;

type AfterAuthScreenProps<T extends keyof AfterAuthStackParamList> =
  NativeStackScreenProps<AfterAuthRouteProp, T>;

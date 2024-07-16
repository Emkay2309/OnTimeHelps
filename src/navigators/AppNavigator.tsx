import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import HomeScreen from '../screens/home';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screens/cart';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Onboard: undefined;
  Home: undefined;
  Draw: undefined;
};

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Draw' component={DrawerNavigator} />
      <Stack.Screen name='Tab' component={TabNavigator} />
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../screens/onboard';
import HomeScreen from '../screens/home';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screens/cart';
import TabNavigator from './TabNavigator';
import CategoryCard from '../screens/categories/cards';
import CategoryListScreen from '../screens/categories/CateogoryListScreen';
import ProductScreen from '../screens/product';
import { ProductType } from '../redux/apis/type';
import AddressList from '../screens/address/addressList';
import LoginsScreen from '../screens/login/Logins';
import './type'
import ForgetPassword from '../screens/forgetPassword';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Logins' component={LoginsScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name='Tab' component={TabNavigator} />
      <Stack.Screen name='Draw' component={DrawerNavigator} />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='CategoryList' component={CategoryCard}/>
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='CategoryListScreen' component={CategoryListScreen} />
      <Stack.Screen name='AddressList' component={AddressList} />
      <Stack.Screen name='ForgotPassword' component={ForgetPassword} />
      {/* <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Draw' component={DrawerNavigator} />
      <Stack.Screen name='Tab' component={TabNavigator} />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='CategoryList' component={CategoryCard}/>
      <Stack.Screen name='ProductScreen' component={ProductScreen} />
      <Stack.Screen name='CategoryListScreen' component={CategoryListScreen} />
      <Stack.Screen name='AddressList' component={AddressList} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

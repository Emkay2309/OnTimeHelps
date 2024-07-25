import { createStackNavigator } from "@react-navigation/stack"
import { ProfileScreenNavigationProp, RootStackParamList } from "./type";
import { IconButton } from "react-native-paper";


const Stack = createStackNavigator<RootStackParamList>();

const ProfileStackNavigator = ({navigation} : ProfileScreenNavigationProp) => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Gilroy-Bold',
            color: 'white',
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerTitle: 'Change Password',
            headerLeft: () => (
              <IconButton
                icon="arrow-back-outline"
                size={28}
                onPress={() => navigation.navigate('Profile')}
                
              />
            ),
          }}
        />
        <Stack.Screen
          name="UpdateDetails"
          component={UpdateDetails}
          options={{
            headerTitle: 'Update Details',
            headerLeft: () => (
              <IconButton
                icon="arrow-back-outline"
                size={28}
                onPressCustom={() => navigation.navigate('Profile')}
                color="white"
              />
            ),
          }}
        />
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={{
            headerTitle: 'My Orders',
            headerLeft: () => (
              <IconButton
                icon="arrow-back-outline"
                size={28}
                onPressCustom={() => navigation.navigate('Profile')}
                color="white"
              />
            ),
          }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            headerTitle: 'Order Details',
            headerLeft: () => (
              <IconButton
                icon="arrow-back-outline"
                size={28}
                onPressCustom={() => navigation.navigate('OrderList')}
                color="white"
              />
            ),
          }}
        />
      </Stack.Navigator>
  )
}

export default ProfileStackNavigator


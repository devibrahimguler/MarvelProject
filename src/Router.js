import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';
import EditProfile from './page/EditProfile';
import Home from './page/Home';
import Detail from './page/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const EntryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: () => {
            return <Icon name="home" size={26} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStack}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: () => {
            return <Icon name="account-group" size={26} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} options={{
        headerTitle: "MarvelProject",
      }}/>
      <Stack.Screen name="DetailPage" component={Detail} options={{
        headerShown: false,
        presentation: "formSheet"
      }}/>
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
      />
      <Stack.Screen
        name="EditProfilePage"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
          presentation: 'fullScreenModal',
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth().currentUser ? 'MainScreen' : 'EntryScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="EntryScreen" component={EntryStack} />
        <Stack.Screen name="MainScreen" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

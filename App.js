import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeStackScreen } from './views/home';
import { AboutStackScreen } from './views/about';


const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarLabel: "主页",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: "关于",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
        name="AboutStack" component={AboutStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeTabScreen } from './views/home';
import { TBDSereen } from './views/blank';
import { ScreenOptions } from './common/vars';

const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen
        name="HomeTab" component={HomeTabScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="TBD" component={TBDSereen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
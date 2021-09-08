import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenOptions } from '../common/vars';
import { TBDSereen } from './blank';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={ScreenOptions}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="TBD" component={TBDSereen} />
        </HomeStack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

export { HomeStackScreen };
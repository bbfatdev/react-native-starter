import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ScreenOptions } from '../common/vars';
import { AboutScreen } from './about';

const HomeTabStack = createBottomTabNavigator();

function HomeTabScreen() {
    return (
        <HomeTabStack.Navigator screenOptions={ScreenOptions}>
            <HomeTabStack.Screen
                options={{
                    tabBarLabel: "主页",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
                name="Home" component={HomeScreen} />
            <HomeTabStack.Screen
                options={{
                    tabBarLabel: "关于",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),
                }}
                name="About" component={AboutScreen} />
        </HomeTabStack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

export { HomeTabScreen };
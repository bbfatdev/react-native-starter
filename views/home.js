import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ScreenOptions } from '../common/vars';
import { AboutScreen } from './about';

const HomeTabStack = createBottomTabNavigator();

// Tab页面加入到这里
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
            <Button titleStyle={{ marginLeft: 5 }}
                icon={
                    <Icon
                        name="check-circle"
                        size={15}
                        color="white"
                    />
                }
                title="Go to TBD"
                onPress={() => navigation.navigate('TBD')}
            />
        </View>
    );
}

export { HomeTabScreen };
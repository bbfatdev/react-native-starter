import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, ListItem, Icon } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TBDSereen } from './blank';
import { ScreenOptions, GlbStyles } from '../common/vars';

const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
    return (
        <AboutStack.Navigator screenOptions={ScreenOptions}>
            <AboutStack.Screen name="About" component={AboutScreen} />
            <AboutStack.Screen name="TBD" component={TBDSereen} />
        </AboutStack.Navigator>
    );
}

function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#E5E5E2' }}>
            <LinearGradient
                colors={['#157DEC', '#3090C7', '#79BAEC']}
                style={[{ backgroundColor: '#82CAFF', flex: 1 }, GlbStyles.card, GlbStyles.shadowProp]}>
                <View style={[{ flex: 1 }, GlbStyles.alignBothCenter]}>
                    <Avatar
                        rounded
                        size="large"
                        source={require("../assets/images/logo.png")}
                    />
                </View>
                <View style={[{ flex: 1 }, GlbStyles.alignBothCenter]}>
                    <View style={[{ flex: 1 }, GlbStyles.alignBothCenter]}>
                        <Text style={{ fontSize: 20, color: 'white' }}>React Native Starter v1.0.1</Text>
                        <Text style={{ fontSize: 13, color: 'white' }}>By: 皓月当空</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                </View>
            </LinearGradient>
            <View style={[GlbStyles.card, { backgroundColor: '#FFFFFF', flex: 2, padding: 5 }]}>
                {
                    list.map((item, i) => (
                        <ListItem key={i} onPress={() => { navigation.navigate('TBD') }} bottomDivider>
                            <Icon name={item.icon} />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }
            </View>
        </View>
    );
}

const list = [
    {
        title: '版权声明',
        icon: 'copyright',
        route: ''
    },
    {
        title: '设置',
        icon: 'settings',
        route: '/appsetting'    // go to setting page
    },
];


export { AboutStackScreen };
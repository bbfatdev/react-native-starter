import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, ListItem, Icon } from 'react-native-elements'

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#F0F8FF' }}>
            <LinearGradient
                colors={['#157DEC', '#3090C7', '#79BAEC']}
                style={[{ backgroundColor: '#82CAFF', flex: 1 }, styles.card, styles.shadowProp]}>
                <View style={[{ flex: 1 }, styles.alignBothCenter]}>
                    <Avatar
                        rounded
                        size="large"
                        source={require("../assets/images/logo.png")}
                    />
                </View>
                <View style={[{ flex: 1 }, styles.alignBothCenter]}>
                    <View style={[{ flex: 1 }, styles.alignBothCenter]}>
                        <Text style={{ fontSize: 20, color: 'white' }}>React Native Starter v1.0.1</Text>
                        <Text style={{ fontSize: 13, color: 'white' }}>By: 皓月当空</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                </View>
            </LinearGradient>
            <View style={[styles.card, { backgroundColor: '#F0F2F3', flex: 2 }, styles.shadowProp]}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', margin: 10, borderWidth: 0, borderRadius: 5, padding: 10 }}>
                    {
                        list.map((item, i) => (
                            <ListItem key={i} onPress={() => goSetting(item.route)} bottomDivider>
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

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderRadius: 8,
        height: 200,
        width: '96%',
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    alignBothCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})


function goSetting(route) {
    console.log(route)
}

export { SettingsScreen };
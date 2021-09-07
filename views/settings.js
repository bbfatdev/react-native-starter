import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';

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
            <View style={[styles.card, { backgroundColor: '#FEFCFF', flex: 2 }, styles.shadowProp]}>
            </View>
        </View>
    );
}

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

export { SettingsScreen };
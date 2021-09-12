import { StyleSheet } from 'react-native';

const ScreenOptions = {
    headerStyle: {
        backgroundColor: '#3090C7',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    headerTintColor: 'white',
    headerBackTitleVisible: false
};

const GlbStyles = StyleSheet.create({
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

export { ScreenOptions, GlbStyles };
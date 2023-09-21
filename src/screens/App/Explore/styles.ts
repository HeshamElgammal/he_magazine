import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const HomeStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        backgroundColor: Colors().FirstColor,
        paddingHorizontal:20,
        height: '100%',
    },
    divider: {
        width: '90%',
        backgroundColor: '#D4D4D4',
        height: 1,
        alignSelf: 'center',
        marginVertical: 5,
        paddingHorizontal: 20
    }
})
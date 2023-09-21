import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import {   heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const ShowStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        height: '100%',
        backgroundColor: Colors().FirstColor,
        paddingHorizontal:20
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
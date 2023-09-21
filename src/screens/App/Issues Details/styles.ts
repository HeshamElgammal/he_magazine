import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const DetailsStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        backgroundColor: Colors().FirstColor,
        paddingHorizontal: 20,
        height: '100%',
    },
    divider: {
        width: '90%',
        backgroundColor: '#D4D4D4',
        height: 1,
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    },
    categryContainer: {
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        borderRadius: 20,
        maxWidth: 70,
        alignItems: 'center'
    },
    categry: {
        fontSize: (9),
        fontWeight: '600',
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().Red,
    },

    Title: {
        fontSize: (28),
        fontFamily: Fonts.PoppinssemiBold,
        color: Colors().SecondColor,
        marginTop: 3,
        fontWeight: '700'
    },
    divider2: {
        height: 1.5,
        backgroundColor: Colors().SecondColor,
        width: '40%',
        marginVertical: 10
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '500',
        marginBottom: 15
    },
})
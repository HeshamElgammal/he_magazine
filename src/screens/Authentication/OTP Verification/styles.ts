import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import {  heightPixel, pixelSizeVertical, theme } from 'theme/sizes'


export const otpStyles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: Colors().FirstColor,
    },
    container: {
        backgroundColor: Colors().SecondColor,
        width: "100%",
        height: Platform.OS === 'ios' ? heightPixel(62) : 0,
    },
    button: {
        marginTop: pixelSizeVertical(200),
        alignSelf: 'center',
        // position: 'absolute',
        // bottom: 0,
    },
    formContainer: {
        width: "100%",
        alignSelf: "center",
        marginTop: heightPixel(12),
        height: '62%',
        paddingHorizontal: theme.spacing.l,
    },
    Email: {
        fontSize: (20),
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: Fonts.PoppinsBold,
        marginTop: 30,
        marginBottom: 15,
        color: Colors().SecondColor
        
    },
    LOGText:
    {
        fontFamily: Fonts.PoppinsMedium,
        textAlign: 'left',
        fontSize: (13),
        fontWeight: '500',
        color: Colors().ThirdColor,
        marginTop: 15,
    },
    SLOGText: {
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
})
import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import {  heightPixel, pixelSizeVertical, theme } from 'theme/sizes'


export const resetStyles = StyleSheet.create({
    SafeAreaView:{
        flex: 1,
        backgroundColor: Colors().SecondColor,
    },
    MainContainer:{
        flex: 1,
        backgroundColor: Colors().FirstColor,
    },
    container: {
        backgroundColor: Colors().SecondColor,
        width: "100%",
        height: Platform.OS === 'ios' ? heightPixel(62) : 0,
    },
    button:{
        marginTop: pixelSizeVertical(45),
        alignSelf: 'center'
    },
    formContainer:{
        width: "100%",
        alignSelf: "center",
        marginTop: heightPixel(12),
        justifyContent: 'space-between',
        height: '72%',
        paddingHorizontal: theme.spacing.l,

    }
})
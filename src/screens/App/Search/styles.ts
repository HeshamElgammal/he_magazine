import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const SearchStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        backgroundColor: Colors().FirstColor,
        height: '100%',
        paddingHorizontal: 20
    },
    divider: {
        width: '90%',
        backgroundColor: '#D4D4D4',
        height: 1,
        alignSelf: 'center',
        marginVertical: 5,
        paddingHorizontal: 20
    },
    LottieContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 450
    },
    Lottie: {
        height: 300,
        width: 300
    },
    Text: {
        fontSize: 23,
        fontWeight: '800',
        fontFamily: Fonts.AkiraExpandedDemo,
        marginTop: 5,
        color: Colors().SecondColor,
        textAlign: 'center'
    }
})
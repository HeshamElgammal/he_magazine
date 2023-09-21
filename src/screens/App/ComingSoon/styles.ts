import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const PDFStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    HeadContainer: {
        backgroundColor: Colors().FirstColor
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
        marginVertical: 5,
        paddingHorizontal: 20
    },
    BigImage: {
        width: '100%',
        marginVertical: 20,
        borderRadius: 10,
    },
    smallImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 20
    },
    slider: {
        // marginTop: -10,
    },
    sliderContentContainer: {
        // paddingVertical: 10 // for custom animation
    },
    Lottie: {
        height: 90,
        width: '100%'
    }
})
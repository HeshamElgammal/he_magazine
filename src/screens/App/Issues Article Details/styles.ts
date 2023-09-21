import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { height, heightPixel, pixelSizeVertical, theme, width } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const DetailsStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        height: '100%',
        backgroundColor: Colors().FirstColor,
    },
    categryContainer: {
        height: 22,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slider: {
        marginTop: -10,
        flex: 1,
        height: '100%',
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
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
    divider: {
        height: 1.5,
        backgroundColor: Colors().SecondColor,
        width: '40%',
        marginVertical: 10
    },
    Image: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 5
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '500',
        marginBottom: 15
    },
    text: {
        fontSize: 12,
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '500',
        marginBottom: 10
    },
    boldText: {
        fontWeight: '800',
        fontSize: 14,
        fontFamily: Fonts.PoppinsItalic
    },
    ImagesContainer: {
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        paddingVertical: 18,
        borderRadius: 12,
        marginLeft: 20,
        marginTop: 20,
        width: '100%',
        padding: 18
    },
    HeartContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    Title2: {
        fontSize: 17,
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '600',
        color: Colors().SecondColor,
        padding: 20
    },
    description2: {
        fontSize: 14,
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().SecondColor,
        paddingHorizontal: 20,
    },
    adContainer: {
        height: height * .69,
        justifyContent: 'center'
    },
    adImage: {
        height: 450,
        width: width,
        resizeMode: 'center',
        // backgroundColor:'#f00'
    },
    adVideo: {
        height: 350,
        width: '100%',
        resizeMode: 'center'
    },
    LearnMoreContainer: {
        width,
        height: 45,
        backgroundColor: Colors().SecondColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    LearnMore: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors().White,
        fontFamily: Fonts.PoppinsBold
    }
})
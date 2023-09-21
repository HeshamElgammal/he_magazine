import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme, widthPixel } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'
import { matrics } from 'theme'


export const welcomeStyles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
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
    diveder: {
        width: '70%',
        height: 1,
        backgroundColor: Colors().SecondColor,
        marginVertical: 15,
        alignSelf: 'center'
    },
    RegisterText:
    {
        fontFamily: Fonts.PoppinsMedium,
        textAlign: 'center',
        fontSize: (13),
        fontWeight: '500',
        color: Colors().ThirdColor,
        marginBottom: 20,
    },
    Social: {
        height: 64,
        width: 80,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors().ThirdColor,
        backgroundColor: Colors().SecondGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SocialContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 15
    },
    Guest:
    {
        fontFamily: Fonts.PoppinsMedium,
        textAlign: 'center',
        fontSize: (16),
        fontWeight: '500',
        color: Colors().ThirdColor,
        marginTop: 30,
        marginBottom: 25,
        textDecorationLine: 'underline'
    },
    SLOGText: {
        textDecorationLine: 'underline',
        fontWeight: '700',
    },
    ForgotPassword: {
        fontSize: (13),
        fontWeight: '500',
        textDecorationLine: 'underline',
        textAlign: 'right',
        marginTop: 15,
        marginRight: 10,
        color: Colors().SecondColor,
        fontFamily: Fonts.PoppinsMedium
    },
    button: {
        marginTop: pixelSizeVertical(20),
        alignSelf: 'center',
        width: '90%'
    },
    HeadContainer: {
        width: matrics.width,
        height: heightPixel(310),
        borderBottomLeftRadius: widthPixel(50),
        borderBottomRightRadius: widthPixel(50),
        paddingHorizontal: theme.spacing.l,
        paddingTop: theme.spacing.xxxl,
        backgroundColor: Colors(1).ForthColor,
        flexDirection: 'row',
        justifyContent: 'center',

    },
})
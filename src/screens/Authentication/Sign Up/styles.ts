import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const signupStyles = StyleSheet.create({
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
    diveder: {
        width: '70%',
        height: 1,
        backgroundColor: Colors().SecondColor,
        marginTop: 50,
        marginBottom: 15,
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
        height: 75,
        width: 75,
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
    LOGText:
    {
        fontFamily: Fonts.PoppinsMedium,
        textAlign: 'center',
        fontSize: (13),
        fontWeight: '500',
        color: Colors().ThirdColor,
        marginVertical: 25,
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
        marginTop: pixelSizeVertical(50),
        alignSelf: 'center'
    }
})
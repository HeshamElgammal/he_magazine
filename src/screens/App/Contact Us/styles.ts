import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { heightPixel, pixelSizeVertical, theme } from 'theme/sizes'
import Fonts from 'theme/fonsFamily'


export const ContactUsStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Colors().SecondColor,
    },
    MainContainer: {
        height: '100%',
        backgroundColor: Colors().FirstColor,
        paddingHorizontal: 20
    },
    containerView: {
        flex: 1,
        backgroundColor:Colors().FirstColor,
      },
    ButtonContainer: {
        padding: 10,
        width: '70%',
        backgroundColor: '#d2d1ce',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15,
        paddingHorizontal:40
    },
    contentText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors().SecondColor
    }
})
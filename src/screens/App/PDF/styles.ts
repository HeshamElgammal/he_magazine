import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'theme/colors'
import { height, width } from 'theme/sizes'


export const PDFStyle = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
        backgroundColor: Platform.OS == 'android' ? Colors().FirstColor : Colors().SecondColor,
    },
    HeadContainer: {
        backgroundColor: Colors().FirstColor
    },
    MainContainer: {
        backgroundColor: Colors().FirstColor,
        paddingHorizontal: 20,
        height: height * .75,
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
    tabBarStyle: {
        position: 'absolute',
        width,
        bottom: 0,
        backgroundColor: Colors().FirstColor,
        height: 85,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
        flexDirection: 'row'
    },
    activeTab: {
        width: '50%',
        backgroundColor: Colors().SecondColor,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deActiveTab: {
        width: '50%',
        backgroundColor: Colors().FirstColor,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeText: {
        fontSize: 12,
        marginTop: 3,
        color: Colors().FirstColor
    },
    deActiveText: {
        fontSize: 12,
        marginTop: 3,
        color: Colors().SecondColor
    }
})
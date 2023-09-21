import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import { width, height } from "theme/sizes";

export const style = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        width,
        bottom: 0,
        backgroundColor: Colors().FirstColor,
        height: height * .09,
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
        fontSize: 11,
        marginTop: 3,
        color: Colors().FirstColor,
        fontWeight: '600'
    },
    deActiveText: {
        fontSize: 12,
        marginTop: 3,
        color: Colors().SecondColor
    }
})
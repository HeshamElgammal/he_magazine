import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "theme/colors";
// import { colors } from '../../theme';
// import { RFValue } from "react-native-responsive-fontsize";
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    tabBarIcon:
    {
        position: 'absolute',
        top: 12
    },
    tabBarStyle:
    {
        backgroundColor: Colors().SecondColor,
        height: 90,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
    },
    tabBarStyle2:{
        backgroundColor: Colors().FirstColor,
        height: 75,
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
        paddingBottom: 0,
    },
});

export default styles
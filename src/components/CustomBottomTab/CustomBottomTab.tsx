import { ActivePdf, DeActiveContent } from "assets/svgs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import ReactNativeModal from "react-native-modal";
import { height, width } from "theme/sizes";
import { Colors } from "theme/colors";
import { useAppDispatch } from "src/redux/store";
import App from "src/redux/app";
import { useNavigation } from "@react-navigation/native";


const CustomBottomTab = ({
    PDF,
}: {
    PDF?: boolean;
}) => {
    const [Drawer, setDrawer] = React.useState(false)
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    return (
        <>
            <View style={style.tabBarStyle}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={style.deActiveTab}>
                    <DeActiveContent />
                    <Text style={style.deActiveText}>Content</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => { dispatch(App.changePDF(!PDF)) }} style={style.activeTab}>
                    <ActivePdf />
                    <Text style={style.activeText}>{PDF ? 'Press here for pdf preview' : 'press here for text preview'}</Text>
                </TouchableOpacity>
            </View>


        </>
    )
}

export default CustomBottomTab
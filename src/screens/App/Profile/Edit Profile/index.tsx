import GlobalAppHeader from "components/App Header without Search";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Platform, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";
import AppTitle from "components/App Title";
import { Archive, Arrow, Edit, FAQ, Logout } from "assets/svgs";
import Fonts from "theme/fonsFamily";
import { ProfileStyle } from "../styles";
import Form from "../component/Form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { universalStyles } from "theme";
import GlobalHeader from "components/Header";

const EditProfileScreen = () => {
    return (
        
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={ProfileStyle.SafeAreaView}>
                <GlobalHeader />
                <View style={ProfileStyle.MainContainer}>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <AppTitle text='Edit Profile' />
                        <Form />
                    </KeyboardAwareScrollView>
                </View>
            </View>

        </>
    )
}

export default EditProfileScreen
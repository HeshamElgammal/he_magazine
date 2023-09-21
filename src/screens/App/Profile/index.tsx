import GlobalAppHeader from "components/App Header without Search";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Platform, View } from "react-native";
import { Colors } from "theme/colors";
import AppTitle from "components/App Title";
import { Archive, Edit, FAQ } from "assets/svgs";
import ProfileItem from "./component/ProfileItem";
import { LogoutButton } from "./component/Logout";
import { useNavigation } from "@react-navigation/native";
import { HomeStyle } from "../Home/styles";
import Auth, { selectIsAuth } from "src/redux/auth";
import { useSelector } from "react-redux";
import { useAppDispatch } from "src/redux/store";


const ProfileScreen = () => {
    const navigation = useNavigation<any>()
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useAppDispatch()
 
    useEffect(() => {
        dispatch(Auth.chnageChanged(false))
        !isAuth ?
            navigation.replace('Auth')
            :
            navigation.navigate('Profile')
    }, [navigation])
    return (
        <>
            <SafeAreaView style={HomeStyle.SafeAreaView}>
                <View style={{ backgroundColor: Colors().FirstColor }}>
                    <GlobalAppHeader />
                </View>
                <View style={HomeStyle.MainContainer}>
                    <AppTitle text='MY PROFILE' title />
                    <FlatList
                        data={[
                            {
                                title: 'Edit profile',
                                Icon: <Edit />,
                                onPress: () => navigation.navigate('EditProfile')
                            },
                            // {
                            //     title: 'Help & FAQ',
                            //     Icon: <FAQ />
                            // },
                            // {
                            //     title: 'Your Archive',
                            //     Icon: <Archive />
                            // },

                        ]}
                        renderItem={({ item }) => (
                            <ProfileItem
                                title={item?.title}
                                Icon={item?.Icon}
                                onpress={item?.onPress}
                            />
                        )}
                    />
                    <LogoutButton />
                    <View style={{ marginTop: Platform.OS == 'ios' ? 90 : 120 }} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default ProfileScreen
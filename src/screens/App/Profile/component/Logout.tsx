import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Logout } from "assets/svgs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Auth from "src/redux/auth";
import { useAppDispatch } from "src/redux/store";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

export const LogoutButton = ({ small }: { small?: boolean }) => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    return (
        <>
            <TouchableOpacity onPress={() => {
                navigation.replace('Auth')
                dispatch(Auth.logout())
                AsyncStorage.setItem('USER_TOKEN', '')
            }} style={small ? styles.SmallButton : styles.button}>
                <Text style={styles.Text}>Logout</Text>
                <Logout />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: Colors().SecondColor,
        backgroundColor: Colors().ForthGrey,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 40
    },
    SmallButton: {
        width: '85%',
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: Colors().SecondColor,
        backgroundColor: Colors().ForthGrey,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 40,
        alignSelf: 'center',
        position: 'absolute'
    },
    Text: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: Fonts.PoppinsMedium,
        marginRight: 10,
        color: Colors().SecondColor
    }
})
import { Arrow, Edit } from "assets/svgs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const ProfileItem = (
    {
        Icon,
        title,
        onpress,
    }: {
        Icon: any
        title: any
        onpress?: any
    }
) => {
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={onpress} style={styles.button}>
                <View style={styles.Row}>
                    <View style={styles.LeftView}>
                        {Icon}
                    </View>
                    <Text style={styles.Text}>{title}</Text>
                </View>
                <Arrow />
            </TouchableOpacity>
        </>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 75,
        borderRadius: 12,
        backgroundColor: Colors().ForthGrey,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'space-between',
        paddingRight: 24
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    LeftView: {
        height: 75,
        width: 75,
        backgroundColor: Colors().SecondColor,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: Fonts.PoppinsMedium,
        marginLeft: 12
    }
})
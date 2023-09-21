import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {   heightPixel, widthPixel } from 'theme/sizes'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import { ActiveFemale, ActiveMale, DeactiveFemale, DeactiveMale } from 'assets/svgs'

const CustomGender = ({
    index,
    setIndex,
    setFieldValue,
}: {
    index?: number;
    setIndex?: any;
    setFieldValue?: any;
}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>Gender</Text>
                <View style={styles.Row}>
                    <TouchableOpacity onPress={() => {
                        setIndex(0)
                        setFieldValue('Gender', 'Male')
                    }} style={index == 1 ? styles.DeactiveButton : styles.ActiveButton}>
                        {index == 1 ? < DeactiveMale /> : <ActiveMale />}
                        <Text style={index == 1 ? styles.DeactiveText : styles.ActiveText}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setIndex(1)
                        setFieldValue('Gender', 'Female')
                    }} style={index == 0 ? styles.DeactiveButton : styles.ActiveButton}>
                        {index == 0 ? < DeactiveFemale /> : <ActiveFemale />}
                        <Text style={index == 0 ? styles.DeactiveText : styles.ActiveText}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>


    )
}

export default CustomGender

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(20),
    },
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ActiveButton: {
        height: heightPixel(64),
        width: widthPixel(160),
        backgroundColor: Colors().SecondColor,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    ActiveText: {
        color: Colors().FirstColor,
        fontSize: (16),
        fontFamily: Fonts.PoppinsMedium,
        marginLeft: 5
    },
    DeactiveButton: {
        height: heightPixel(64),
        width: widthPixel(160),
        backgroundColor: Colors().FirstColor,
        borderColor: Colors().SecondColor,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    DeactiveText: {
        color: Colors().SecondColor,
        fontSize: (16),
        fontFamily: Fonts.PoppinsMedium,
        marginLeft: 5
    },

    label: {
        fontSize: (15),
        marginBottom: 5,
        fontWeight: "400",
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().SecondColor
    },
})
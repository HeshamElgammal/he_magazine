import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, theme } from 'theme/sizes'
import { Colors } from 'theme/colors'


const TextAuthRed = ({ text = "" }: { text: string }) => {

    return (
        <View style={styles.container}>
            <Text
                style={[styles.text]}
            >{text}</Text>
        </View>
    )
}

export default TextAuthRed

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: theme.spacing.l,
    },
    text: {
        fontSize: fontPixel(40),
        fontWeight: "800",
        marginTop: theme.spacing.m,
        color: Colors().Red
    }
})
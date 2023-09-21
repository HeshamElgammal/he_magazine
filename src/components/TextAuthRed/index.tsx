import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from 'theme/sizes'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
// import Fonts from 'theme/fonsFamily'


const TextAuthRed = ({ text = "", title = "" }: { text: string, title?: string }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: title ? 24 : 40, }]}>{text}</Text>
            {title && <Text style={styles.title}>{title}</Text>}
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
        // fontWeight: "800",
        marginTop: 20,
        color: Colors().Red,
        fontFamily: Fonts.AkiraExpandedDemo
    },
    title: {
        fontSize: (15),
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '500',
        color: Colors().ThirdColor,
        marginTop:8
    }
})
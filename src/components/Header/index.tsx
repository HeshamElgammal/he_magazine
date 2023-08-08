import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { matrics, } from 'theme'

import { fontPixel, heightPixel, theme, widthPixel } from 'theme/sizes'
import { BACK } from 'assets/svgs'
import { Colors } from 'theme/colors'

const GlobalHeader = () => {

    return (
        <View style={[styles.container,]}>
            <BACK />
            <Text style={[styles.text]}>he.</Text>
        </View>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({
    container: {
        width: matrics.width,
        height: heightPixel(130),
        borderBottomLeftRadius: widthPixel(50),
        borderBottomRightRadius: widthPixel(50),
        paddingHorizontal: theme.spacing.l,
        paddingTop:theme.spacing.xl,
        backgroundColor:Colors(1).ForthColor

    },
    text: {
        fontSize: fontPixel(50),
        color:"#ECEAE7",
        textAlign:"center",
        fontWeight:"bold",
        marginTop:heightPixel(-40),

    }
})
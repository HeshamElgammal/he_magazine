import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'theme/colors'
import { pixelSizeHorizontal, pixelSizeVertical, theme } from 'theme/sizes'


  


export const loginStyles = StyleSheet.create({
    forgotPassContainer:{
        width:"100%",
        // backgroundColor:Colors().FirstColor,
        paddingHorizontal:pixelSizeHorizontal(18),
        alignItems:"flex-end",
        marginTop:pixelSizeVertical(10)
    },
    forgotPassText:{
        fontSize:theme.TypographySize.xxmid,
        color:Colors().SecondColor,
        fontWeight:"500",
        textDecorationLine:"underline"
    }
})
import React from 'react';
import { StyleSheet } from "react-native";
import { matrics } from "theme";
import { Colors } from "theme/colors";


export const GlobalStyle = () => {
    return (StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors().DarkBlue,
            alignItems: "center",
            justifyContent: "center"
        },
        text1: {
            color: "#fff"
        },
        btn: {
            width: matrics.screenWidth * .5,
            height: 50,
            backgroundColor: "#466",
            marginTop: matrics.screenHeight * .03,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
        }
    }))
}
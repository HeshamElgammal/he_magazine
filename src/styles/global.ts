import React from 'react';
import { StyleSheet } from "react-native";
import { matrics } from "theme";
import { Colors } from "theme/colors";
import { height } from 'theme/sizes';


export const GlobalStyle = () => {
    return (StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors(1).FirstColor,
            alignItems: "center",
            height: height,
            // justifyContent: "center"
        },
        textColor1: {
            color: Colors(1).SecondColor
        },
        textColor2: {
            color: Colors(1).ThirdColor
        },
        headerColors: {
            backgroundColor: "#131313",
            color: Colors(1).ThirdColor,
            borderWidth: 1,
            // borderColor: Colors().SecondColor,
            shadowColor: Colors().SecondColor,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        
            elevation: 5,
        },
        btn: {
            width: matrics.screenWidth * .5,
            height: 50,
            backgroundColor: "#466",
            marginTop: matrics.screenHeight * .03,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
        },
        colorRed: {
            color: Colors().Red
        },
        bgInputs: {
            backgroundColor: Colors(1).FirstColor,
        },
        borderColors: {
            borderColor: Colors().ThirdColor
        }
    }))
}
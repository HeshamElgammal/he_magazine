import { Phone } from "assets/svgs";
import React from "react";
import { Text, View } from "react-native";
import { ContactUsStyle } from "../styles";


export const Card = ({
    Icon,
    text
}: {
    Icon: any;
    text?: string;
}) => {
    return (
        <>
            <View style={ContactUsStyle.ButtonContainer}>
                <Icon />
                <Text style={ContactUsStyle.contentText}>{text}</Text>
            </View>
        </>
    )
}
import { StyleSheet, Text, TouchableOpacity, TextStyle, Platform } from 'react-native'
import AnimatedLottieView from "lottie-react-native";
import React from 'react'
import { heightPixel, widthPixel } from 'theme/sizes'
import { SvgXml } from 'react-native-svg'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import { Buy, Logout } from 'assets/svgs'
import { ButtonLoader } from 'assets/Lotties';

const CustomBtn = ({
    onClick,
    title,
    StylesBtn,
    StylesText,
    pending = false,
    color = "dark"
}: {
    onClick: (event: any) => void,
    title: string,
    StylesBtn?: any
    StylesText?: TextStyle,
    pending?: boolean,
    color?: "light" | "dark"
}) => {
    return (
        <TouchableOpacity style={[styles.btn, StylesBtn, { backgroundColor: color == "dark" ? Colors().SecondColor : Colors().SecondGrey }]} onPress={onClick} disabled={pending}
        >
            {pending ?
                <AnimatedLottieView
                    resizeMode="cover"
                    loop={true}
                    autoPlay={true}
                    source={ButtonLoader}
                    style={styles.Lottie}
                />
                :
                <>
                    <Text style={[styles.title, StylesText, { color: color == "dark" ? Colors().SecondGrey : Colors().SecondColor }]}>{title}</Text>
                    {title == "Logout" && <Logout style={{ marginLeft: 10 }} />}
                    {title == "Buy now" && <Buy style={{ marginLeft: 10 }} />}
                </>}
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: Platform.OS == "ios" ? heightPixel(55) : heightPixel(60),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: widthPixel(6),
        backgroundColor: Colors().SecondColor,
        flexDirection: "row",
        borderWidth: .8,
        borderColor: Colors().SecondColor
    },
    title: {
        fontSize: (16),
        color: Colors().FirstColor,
        fontWeight: "500",
        fontFamily: Fonts.PoppinsMedium
    },
    Lottie: {
        height: 30,
        width: 80
    }
})
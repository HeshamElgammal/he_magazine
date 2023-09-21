import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import GlobalHeader from "components/Header";
import AnimatedLottieView from "lottie-react-native";
import { PDFStyle } from "./styles";
import { ComingSoon } from "assets/Lotties";
const ComingSoonScreen = () => {
    return (
        <>
            <SafeAreaView style={PDFStyle.SafeAreaView}>
                <View style={PDFStyle.HeadContainer}>
                    <GlobalHeader share />
                </View>

                <View style={PDFStyle.MainContainer}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatedLottieView
                            resizeMode="cover"
                            loop={true}
                            autoPlay={true}
                            source={ComingSoon}
                            style={PDFStyle.Lottie}
                        />
                    </View>
                    <View style={{ marginTop: 90 }} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default ComingSoonScreen
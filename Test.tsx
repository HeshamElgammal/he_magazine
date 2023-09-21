import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "theme/colors";
import { height } from "theme/sizes";

export const Test = () => {
    return (
        <>
            <SafeAreaView style={{
                height: height * .9,
                backgroundColor: '#f00'
            }}>
            </SafeAreaView>
            <View style={{
                height: height * .1,
                backgroundColor: Colors().FirstColor,
                // height: 75,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.53,
                shadowRadius: 13.97,
                elevation: 21,
                paddingBottom: 0,
            }}>

            </View>
        </>
    )
}
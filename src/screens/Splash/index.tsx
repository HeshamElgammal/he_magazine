import { RedLogo } from "assets/svgs";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import thunks from "src/redux/auth/thunks";
import { useAppDispatch } from "src/redux/store";
import { Colors } from "theme/colors";


const SplashScreen = () => {
    const dispatch = useAppDispatch()
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        dispatch(thunks.getCountries())
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, [])


    return (
        <>
            <View style={{
                height: "100%",
                width: "100%",
                backgroundColor: Colors().FirstColor,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Animated.View style={{
                    opacity: fadeAnim,
                    marginTop: 100
                }}>
                    <RedLogo />
                </Animated.View>
            </View>
        </>
    )
}

export default SplashScreen
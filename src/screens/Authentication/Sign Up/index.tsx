import { Platform, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from 'components/Header'
import TextAuthRed from 'components/TextAuthRed'
import Form from './components/Form'
import { useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { universalStyles } from 'theme'
import { signupStyles } from './styles'
import { Apple, Facebook, Google } from 'assets/svgs'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'theme/colors'


const SignUpScreen = () => {

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={signupStyles.SafeAreaView}>
                <View style={signupStyles.MainContainer}>
                    <GlobalHeader />
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <TextAuthRed text='Sign up' />
                        <Form />
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>

    )
}

export default SignUpScreen

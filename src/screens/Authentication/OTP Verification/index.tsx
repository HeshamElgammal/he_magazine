import { Platform, StatusBar, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from 'components/Header'
import TextAuthRed from 'components/TextAuthRed'
import Form from './components/Form'
import { useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { universalStyles } from 'theme'
import { otpStyles } from './styles'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontPixel } from 'theme/sizes'
import { useRoute } from '@react-navigation/native'
import { Colors } from 'theme/colors'


const OTPVerificationScreen = () => {
    const theme = useAppSelector(selectTheme)
    const { type, email }: any = useRoute().params;

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={otpStyles.SafeAreaView}>
                <View style={otpStyles.MainContainer}>
                    <GlobalHeader />
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? 0 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <TextAuthRed
                            text='OTP Verification'
                            title='We will send you a one-time password on this email address'
                        />
                        <Text style={otpStyles.Email}>{email}</Text>
                        <Form type={type} email={email} />
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>
    )
}

export default OTPVerificationScreen

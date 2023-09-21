import { Platform, StatusBar, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalHeader from 'components/Header'
import TextAuthRed from 'components/TextAuthRed'
import Form from './components/Form'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import Auth, { selectTheme } from 'src/redux/auth'
import { universalStyles } from 'theme'
import { resetStyles } from './styles'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'theme/colors'


const ResetPasswordScreen = () => {
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(Auth.chnageChanged(false))
    }, [])
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={resetStyles.SafeAreaView}>
                <View style={resetStyles.MainContainer}>
                    <GlobalHeader />
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? 0 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <TextAuthRed
                            text='Reset password'
                            title='Please enter your email.'
                        />
                        <Form />
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>

    )
}

export default ResetPasswordScreen

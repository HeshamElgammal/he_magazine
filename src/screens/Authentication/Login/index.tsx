import { Platform, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalHeader from 'components/Header'
import TextAuthRed from 'components/TextAuthRed'
import Form from './components/Form'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import Auth, { selectIsAuth, selectTheme } from 'src/redux/auth'
import { universalStyles } from 'theme'
import { loginStyles } from './styles'
import { Apple, Facebook, Google } from 'assets/svgs'
import SocialIcon from './components/Social'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'theme/colors'
import { useSelector } from 'react-redux'


const LoginScreen = () => {
    const theme = useAppSelector(selectTheme)
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectIsAuth)
    useEffect(() => {
        dispatch(Auth.chnageChanged(false))
        dispatch(Auth.chnageVerified(false))
    }, [navigation])
    useEffect(() => {
        isAuth && navigation.navigate('App')
    }, [isAuth])
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={loginStyles.SafeAreaView}>
                <View style={loginStyles.MainContainer}>
                    <GlobalHeader />
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <TextAuthRed text='Login' />
                        <Form />
                        <View style={loginStyles.diveder} />
                        {/* <Text style={loginStyles.RegisterText}>Or login using social media</Text>
                        <View style={loginStyles.SocialContainer}>
                            <SocialIcon Icon={Google} loading={false} onPress={() => { }} />
                            <SocialIcon Icon={Apple} loading={false} onPress={() => { }} />
                            <SocialIcon Icon={Facebook} loading={false} onPress={() => { }} />
                        </View> */}
                        <Text style={loginStyles.LOGText}>Don’t have an account? <Text onPress={() => navigation.navigate('SignUp')} style={loginStyles.SLOGText}>Sign up</Text></Text>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>
    )
}

export default LoginScreen

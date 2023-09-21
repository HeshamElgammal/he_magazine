import { Platform, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { universalStyles } from 'theme'
import { welcomeStyles } from './styles'
import { Apple, Facebook, Google, Logo } from 'assets/svgs'
import SocialIcon from './components/Social'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBtn from 'components/CustomBtn'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'theme/colors'


const WelcomeScreen = () => {
    const { navigate } = useNavigation<any>()
    const theme = useAppSelector(selectTheme)

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors().SecondColor }} />
            <View style={welcomeStyles.SafeAreaView}>
                <View style={welcomeStyles.MainContainer}>
                    <View style={welcomeStyles.HeadContainer}>
                        <Logo width={242} height={90}/>
                    </View>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[universalStyles.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <CustomBtn
                            title='Create new account'
                            onClick={() => { navigate('SignUp') }}
                            StylesBtn={[welcomeStyles.button, { marginTop: 50 }]}
                            color='dark'
                        />
                        <CustomBtn
                            title='Login'
                            onClick={() => { navigate('Login') }}
                            StylesBtn={welcomeStyles.button}
                            color='light'

                        />
                        <Text onPress={() => navigate('App')} style={welcomeStyles.Guest}>Continue as a guest</Text>

                        {/* <View style={welcomeStyles.diveder} />
                        <Text style={welcomeStyles.RegisterText}>Or register by social media</Text>
                        <View style={welcomeStyles.SocialContainer}>
                            <SocialIcon Icon={Google} loading={false} onPress={() => { }} />
                            <SocialIcon Icon={Apple} loading={false} onPress={() => { }} />
                            <SocialIcon Icon={Facebook} loading={false} onPress={() => { }} />
                        </View> */}
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>

    )
}

export default WelcomeScreen

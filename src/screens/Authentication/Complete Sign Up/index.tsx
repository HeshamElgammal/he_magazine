import { Platform, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from 'components/Header'
import Form from './components/Form'
import { universalStyles } from 'theme'
import { signupStyles } from './styles'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'theme/colors'
import { useRoute } from '@react-navigation/native'


const CompleteSignUpScreen = () => {
    const { data }: any = useRoute().params;
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
                        <Form data={data}/>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </>
    )
}

export default CompleteSignUpScreen

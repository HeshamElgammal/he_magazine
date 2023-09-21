import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OTPVerificationScreen, SignUpScreen, CompleteSignUpScreen } from 'screens';

export type RegistStack = {
    CompleteSignUp: undefined;
    SignUp: undefined;
    OTP: undefined;
}
const RegistStack = createNativeStackNavigator<RegistStack>();

const RegistStackScreens = () => {
    return (
        <RegistStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="SignUp"
        >
            <RegistStack.Screen name="SignUp" component={SignUpScreen} />
            <RegistStack.Screen name="OTP" component={OTPVerificationScreen} />
            <RegistStack.Screen name="CompleteSignUp" component={CompleteSignUpScreen} />
        </RegistStack.Navigator>
    );
};

export default RegistStackScreens;

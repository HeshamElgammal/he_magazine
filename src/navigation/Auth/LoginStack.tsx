import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmPasswordScreen, LoginScreen, OTPVerificationScreen, ResetPasswordScreen } from 'screens';

export type LoginStack = {
    Login: undefined;
    OTP: undefined;
    ResetPassword: undefined;
    ConfirmPassword: undefined;
};

const LoginStack = createNativeStackNavigator<LoginStack>();

const LoginStackScreens = () => {
    return (
        <LoginStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Login"
        >
            <LoginStack.Screen name="Login" component={LoginScreen} />
            <LoginStack.Screen name="OTP" component={OTPVerificationScreen} />
            <LoginStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <LoginStack.Screen name="ConfirmPassword" component={ConfirmPasswordScreen} />
        </LoginStack.Navigator>
    );
};

export default LoginStackScreens;

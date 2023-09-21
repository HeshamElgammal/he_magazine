import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OTPVerificationScreen, WelcomeScreen } from 'screens';
import LoginStackScreens from './LoginStack';
import RegistStackScreens from './RegistStack';

export type AuthStack = {
    Welcome: undefined;
    SignUp: undefined;
    OTP: undefined;
    Login: undefined;
    ResetPassword: undefined;
    ConfirmPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStack>();

const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Welcome"
        >
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
            <AuthStack.Screen name="SignUp" component={RegistStackScreens} />
            <AuthStack.Screen name="OTP" component={OTPVerificationScreen} />
            
            <AuthStack.Screen name="Login" component={LoginStackScreens} />
        </AuthStack.Navigator>
    );
};

export default AuthStackScreens;

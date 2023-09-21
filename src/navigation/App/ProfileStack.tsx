import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmPasswordScreen, LoginScreen, OTPVerificationScreen, ResetPasswordScreen } from 'screens';
import { ProfileScreen } from 'screens/App';
import EditProfileScreen from 'screens/App/Profile/Edit Profile';

export type ProfileStack = {
    Home: undefined;
    EditProfile: undefined;
    ResetPassword: undefined;
    ConfirmPassword: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStack>();

const ProfileStackScreens = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <ProfileStack.Screen name="Home" component={ProfileScreen} />
            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
            <ProfileStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <ProfileStack.Screen name="ConfirmPassword" component={ConfirmPasswordScreen} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackScreens;

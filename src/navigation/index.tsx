import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreens from './Auth';
import SplashScreen from 'screens/Splash';
import AppDrawer from './Drawer';
import EditProfileScreen from 'screens/App/Profile/Edit Profile';
import SearchScreen from 'screens/App/Search';
import ArticleDetailScreen from 'screens/App/Article Details';
import ShowMoreScreen from 'screens/App/ShowMore';
import IssuesDetailsScreen from 'screens/App/Issues Details';
import InnerTabs from './BottomTab/InnerTabs';
import NotificationsScreen from 'screens/App/Notifications';
import PDFScreen from 'screens/App/PDF';
import PDFDrawer from './PDF Drawer';

export type RootStack = {
    Splash: undefined;
    Auth: undefined;
    App: undefined;

    EditProfile: undefined;
    Search: undefined;
    ShowMore: undefined;
    ArticleDetail: undefined;
    IssuesDetails: undefined;
    InnerTab: undefined;
    Notification: undefined;
};

const RootStack = createNativeStackNavigator<RootStack>();

const RootStackScreens = () => {
    const [Splash, setSplash] = React.useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3500)
    }, [])
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Splash"
        >
            {Splash && <RootStack.Screen name="Splash" component={SplashScreen} />}
            <RootStack.Screen name="App" component={AppDrawer} />
            <RootStack.Screen name="Auth" component={AuthStackScreens} />


            <RootStack.Screen name="EditProfile" component={EditProfileScreen} />
            <RootStack.Screen name="Search" component={SearchScreen} />
            <RootStack.Screen name="ShowMore" component={ShowMoreScreen} />
            <RootStack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
            <RootStack.Screen name="IssuesDetails" component={IssuesDetailsScreen} />
            <RootStack.Screen name="Notification" component={NotificationsScreen} />
            <RootStack.Screen name="InnerTab" component={PDFDrawer} />


        </RootStack.Navigator>
    );
};

export default RootStackScreens;

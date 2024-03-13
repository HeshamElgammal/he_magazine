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
import NotificationsScreen from 'screens/App/Notifications';
import PDFDrawer from './PDF Drawer';
import ContactUsScreen from 'screens/App/Contact Us';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native'



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
    Contactus: undefined;
};

const RootStack = createNativeStackNavigator<RootStack>();

const RootStackScreens = () => {
    const [Splash, setSplash] = React.useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3000)
    }, [])
    function string_between_strings(startStr, endStr, str) {
        const pos = str.indexOf(startStr) + startStr.length;
        return str.substring(pos, str.indexOf(endStr, pos));
    }
    const HandleDeepLinking = () => {
        const { navigate } = useNavigation<any>()

        Linking.getInitialURL().then((link) => {
            const id = string_between_strings('article%3D', '%26type%3D', link)
            const type = string_between_strings('%26type%3D', '&apn=', link)
            type == 'article' ?
                navigate('ArticleDetail', { id })
                :
                navigate('IssuesDetails', { id })
        });

        const handleDynamicLinks = async (link: any) => {
            console.error((link))
            let id = string_between_strings('article=', '&type=', link?.url)
            let type = link.url.split('&type=').pop()
            // let type = link.url.split('=').pop()
            // console.log('id:', id)
            type == 'article' ?
                navigate('ArticleDetail', { id })
                :
                navigate('IssuesDetails', { id })
            // navigate('ArticleDetail', { id: id })
            // alert(id)
        }
        useEffect(() => {
            const unsubscribe = dynamicLinks().onLink(handleDynamicLinks)
            return () => unsubscribe()
        }, [])
        return null
    }

    return (
        <>
            <HandleDeepLinking />
            <RootStack.Navigator
                screenOptions={{ headerShown: false }
                }
                initialRouteName="App"
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
                <RootStack.Screen name="Contactus" component={ContactUsScreen} />


            </RootStack.Navigator>
        </>

    );
};

export default RootStackScreens;

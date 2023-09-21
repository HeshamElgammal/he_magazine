import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { ActiveExplore, ActiveHome, ActiveLibrary, ActiveProfile, DeActiveExplore, DeActiveHome, DeActiveLibrary, DeActiveLogin, DeActiveProfile } from 'assets/svgs';
import { Colors } from 'theme/colors';
import { ExploreScreen, HomeScreen, ProfileScreen } from 'screens/App';
import LibraryScreen from 'screens/App/Library';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'src/redux/auth';

const BottomTab = createBottomTabNavigator();


export default function BottomTabs() {
    const isAuth = useSelector(selectIsAuth)
    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors().SecondColor,
                tabBarInactiveTintColor: Colors().ThirdGrey,
                tabBarStyle: styles.tabBarStyle,
            })}>
            <BottomTab.Screen name={"Home"} component={HomeScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActiveHome /> : <DeActiveHome />}
                    </View>
                )
            }}
            ></BottomTab.Screen>
            <BottomTab.Screen name={"Explore"} component={ExploreScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActiveExplore /> : <DeActiveExplore />}
                    </View>
                )
            }}
            ></BottomTab.Screen>

            <BottomTab.Screen name={"Library"} component={LibraryScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActiveLibrary /> : <DeActiveLibrary />}
                    </View>
                )
            }}
            ></BottomTab.Screen>
            <BottomTab.Screen name={"Profile"} component={ProfileScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {isAuth ?
                            focused ? <ActiveProfile /> : <DeActiveProfile />
                            :
                            focused ? <DeActiveLogin /> : <DeActiveLogin />
                        }
                    </View>
                ),
            }}
            ></BottomTab.Screen>

        </BottomTab.Navigator>
    );
}




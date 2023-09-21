import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { ActiveContent, ActivePdf, DeActiveContent, DeActiveBookMark, DeActiveFormat, DeActivePdf } from 'assets/svgs';
import { Colors } from 'theme/colors';
import PDFScreen from 'screens/App/PDF';
import IssuesArticleDetailScreen from 'screens/App/Issues Article Details';
import ComingSoonScreen from 'screens/App/ComingSoon';
import { selectCounter } from 'src/redux/app';
import { useSelector } from 'react-redux';

const InnerTab = createBottomTabNavigator();

export default function InnerTabs() {
    const counter = useSelector(selectCounter)
    return (
        <InnerTab.Navigator
            initialRouteName={
                // counter % 2 == 1 ?
                // 'PDF'
                // :
                'Text'}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors().FirstColor,
                tabBarInactiveTintColor: Colors().ThirdGrey,
                tabBarStyle: styles.tabBarStyle2,
                tabBarActiveBackgroundColor: Colors().SecondColor,
                tabBarItemStyle: {
                    borderTopEndRadius: 24,
                    borderTopStartRadius: 24,
                },
                tabBarLabelStyle: {
                    marginBottom: 20
                }
            })}>

            <InnerTab.Screen name={"Content"} component={IssuesArticleDetailScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActiveContent /> : <DeActiveContent />}
                    </View>
                )
            }}
            ></InnerTab.Screen>
            {/* <InnerTab.Screen name={"Bookmark"} component={ComingSoonScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <DeActiveBookMark /> : <DeActiveBookMark />}
                    </View>
                )
            }}
            ></InnerTab.Screen>

            <InnerTab.Screen name={"Format"} component={ComingSoonScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <DeActiveFormat /> : <DeActiveFormat />}
                    </View>
                )
            }}
            ></InnerTab.Screen> */}
            {/* {counter % 2 == 0 ? <InnerTab.Screen name={"PDF"} component={PDFScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActivePdf /> : <DeActivePdf />}
                    </View>
                )
            }}
            ></InnerTab.Screen>
                : */}
            <InnerTab.Screen name={"Text"} component={PDFScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        {focused ? <ActivePdf /> : <DeActivePdf />}
                    </View>
                )
            }}
            ></InnerTab.Screen>
            {/* } */}

        </InnerTab.Navigator >
    );
}




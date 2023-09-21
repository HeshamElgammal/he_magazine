import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import BottomTabs from '../BottomTab/MainBottomTabs';
import CustomSidebarMenu from './CustomDrawer';
import AppThunks from 'src/redux/app/thunks';
import { useAppDispatch } from 'src/redux/store';
const { height } = Dimensions.get("window");

const Drawer = createDrawerNavigator();



export default function AppDrawer() {
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(AppThunks.getHomeCategories())
    }, [])
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    fontSize: (17),
                    height: 25,
                    justifyContent: 'center',
                    marginTop: 5,
                    fontWeight: '700',
                },
                drawerPosition: 'left'
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            <>
                <Drawer.Screen
                    name="الصفحه الرئيسية"
                    component={BottomTabs}
                />
            </>
        </Drawer.Navigator>
    );
}
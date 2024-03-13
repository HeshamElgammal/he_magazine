
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, View, TouchableOpacity, Platform, Image, Linking, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from 'theme/colors';
import { Close, ContactUs, Explore, Home, Library, Logo, Profile } from 'assets/svgs';
import AnimatedAcordion from './AnimatedAcordion';
import { useNavigation } from '@react-navigation/native';
import App, { selectCategoryIndex } from 'src/redux/app';
import { selectIsAuth } from 'src/redux/auth';


const { height } = Dimensions.get("window")

const CustomSidebarMenu = (props: any) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const SelectedIndex = useSelector(selectCategoryIndex)
    const isAuth = useSelector(selectIsAuth)

    return (
        <DrawerContentScrollView style={styles.DrawerContentScrollView} {...props}>
            <SafeAreaView style={styles.Container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo />
                    <TouchableOpacity activeOpacity={.8} onPress={() => props.navigation.closeDrawer()}>
                        <Close />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Home') }} style={{ marginTop: 55, marginBottom: 35 }}>
                    <Home />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Explore') }} style={{ marginBottom: 35 }}>
                    <Explore />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Library') }} style={{ marginBottom: 35 }}>
                    <Library />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Profile') }} style={{ marginBottom: 35 }}>
                    <Profile />
                </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Contactus') }} style={{ marginBottom: 35, flexDirection: 'row', alignItems: 'center' }}>
                        <ContactUs />
                        <Text style={{ color: Colors().FirstColor, fontSize: 15, marginLeft: 13, fontWeight: '500' }}>Contact us</Text>
                    </TouchableOpacity>
                

                <View style={{
                    marginBottom: 35,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <AnimatedAcordion close={() => {
                        dispatch(App.changeCategoryIndex(SelectedIndex))
                        navigation.navigate('Explore')
                        props.navigation.closeDrawer()
                    }} SelectedIndex={SelectedIndex} />
                </View>
            </SafeAreaView>
        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    DrawerContentScrollView: {
        backgroundColor: Colors().SecondColor,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    Container:
    {
        height: height * .8,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: Colors().SecondColor,
    },
    Close:
    {
        alignSelf: 'flex-end',
    },
    MainMenu:
    {
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        marginTop: Platform.OS == 'ios' ? 30 : 20,
        marginBottom: 40,
        fontWeight: '700'
    },
    Seprator:
    {
        height: 1.5,
        backgroundColor: '#2E2E2E1F',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20
    },
    LogOutButton:
    {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    LogOutText:
    {
        fontSize: 17,
        textAlign: 'right',
        color: '#2E2E2E',
        marginRight: 13,
        fontWeight: '600',
    }

});

export default CustomSidebarMenu;
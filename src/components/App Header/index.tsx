import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { matrics, } from 'theme'
import { heightPixel, theme, widthPixel } from 'theme/sizes'
import { Tab, Logo, Notify, Search } from 'assets/svgs'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native'
import Fonts from 'theme/fonsFamily'

const GlobalAppHeader = () => {
    const navigation = useNavigation<any>()
    return (
        <>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <View style={[styles.container]}>
                    <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.openDrawer() }}>
                        <Tab style={{ marginTop: 10 }} />
                    </TouchableOpacity>
                    <Logo height={40} width={100} />
                    <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Notification') }}>
                        {/* <Notify style={{ marginTop: 10 }} /> */}
                        <View style={{ width: 24 }} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Search')} style={styles.SearchContainer}>
                    <Search />
                    <View style={styles.diveder} />
                    <Text style={{ color: Colors().textInputPlaceholderTextColor, fontFamily: Fonts.PoppinsMedium }}>Search</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default GlobalAppHeader

const styles = StyleSheet.create({
    container: {
        width: matrics.width,
        height: heightPixel(130),
        borderBottomLeftRadius: widthPixel(50),
        borderBottomRightRadius: widthPixel(50),
        paddingHorizontal: theme.spacing.l,
        paddingTop: theme.spacing.l,
        backgroundColor: Colors(1).ForthColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    SearchContainer: {
        width: '90%',
        height: 56,
        borderRadius: 18,
        borderColor: '#C1C1C1',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: -30,
        backgroundColor: Colors().FirstColor,
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    diveder: {
        height: '80%',
        width: 1,
        backgroundColor: '#C1C1C1',
        marginHorizontal: 10,
    },
    TextInput: {
        width: '85%',
        height: '100%'
    }
})
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { matrics, } from 'theme'
import { theme } from 'theme/sizes'
import { Tab, Logo, Notify, Search, Share } from 'assets/svgs'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native'

const GlobalAppHeader = ({
    share
}: {
    share?: boolean
}) => {
    const navigation = useNavigation<any>()
    return (
        <>
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.openDrawer() }}>
                    <Tab style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Logo height={40} width={100} />
                <TouchableOpacity activeOpacity={.8} onPress={() => { }}>
                    <View style={{ width: 24 }} />

                    {/* {
                        share ?
                            <Share style={{ marginTop: 10 }} />
                            :
                            <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Notification') }}>
                                <Notify style={{ marginTop: 10 }} />
                            </TouchableOpacity>
                    } */}
                </TouchableOpacity>
            </View>
        </>

    )
}

export default GlobalAppHeader

const styles = StyleSheet.create({
    container: {
        width: matrics.width,
        height: 120,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
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
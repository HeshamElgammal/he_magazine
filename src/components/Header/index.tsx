import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { matrics, } from 'theme'

import { heightPixel, theme, widthPixel } from 'theme/sizes'
import { BACK, Logo, Search, Share } from 'assets/svgs'
import { Colors } from 'theme/colors'
import { useNavigation } from '@react-navigation/native'
import { _Search } from 'src/utils/HF'
import { onSharePressed } from 'src/utils/share_Article'

const GlobalHeader = ({
    search,
    share,
    text,
    data,
    setFilter,
    updateSearch,
    id,
    Type
}: {
    search?: boolean;
    share?: boolean;
    text?: any;
    data?: any[];
    setFilter?: any;
    updateSearch?: any;
    id?: any;
    Type?:any
}) => {
    const { goBack } = useNavigation()
    return (
        <>
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
                    <BACK style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Logo height={40} width={100} />
                {
                    share ?

                        <TouchableOpacity activeOpacity={.8} onPress={() => onSharePressed(id,Type)}>
                            <Share width={25} style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                        :
                        <View style={{ width: 25 }} />
                }

            </View>
            {
                search &&
                <View style={styles.SearchContainer}>
                    <Search />
                    <View style={styles.diveder} />
                    <TextInput
                        value={text}
                        onChangeText={(text) => {
                            _Search(text, data, setFilter, updateSearch);
                        }}
                        placeholder='Search'
                        style={styles.TextInput}
                    />
                </View>
            }
        </>


    )
}

export default GlobalHeader

const styles = StyleSheet.create({
    container: {
        width: matrics.width,
        height: 100,
        borderBottomLeftRadius: (40),
        borderBottomRightRadius: (40),
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
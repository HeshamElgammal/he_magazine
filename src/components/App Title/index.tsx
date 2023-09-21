import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from 'theme/sizes'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import { useNavigation } from '@react-navigation/native'


const AppTitle = ({
    text = "",
    seemore,
    title
}: {
    text: string,
    seemore?: boolean
    title?: boolean
}) => {
    const { navigate } = useNavigation<any>()
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: title ? 28 : 24 }]}>{text}</Text>
            {seemore && <Text onPress={() => navigate('ShowMore', { title: text })} style={[styles.title]}>See more</Text>}
        </View>
    )
}

export default AppTitle

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 20,
    },
    text: {
        color: Colors().Red,
        fontFamily: Fonts.AkiraExpandedDemo,
    },
    title: {
        fontSize: (10),
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '500',
        color: Colors().Red,
        textDecorationLine: 'underline'
    }
})
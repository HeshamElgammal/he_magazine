import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'theme/colors'

const NotificationItem = ({
    data,
    active
}: {
    data?: any[];
    active?: boolean;
}) => {
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.Container, { backgroundColor: item?.active ? Colors().SecondColor : Colors().ForthGrey, }]}>
                            <Image style={styles.Image} source={{ uri: 'https://source.unsplash.com/1024x768/?' }} />
                            <View style={styles.secContainer}>
                                <Text style={[styles.Title, { color: !item?.active ? Colors().SecondColor : Colors().ForthGrey, }]}>Lorem IpsumIpsumIpsum is simply and Text dummy text.</Text>
                                <View style={styles.TextContainer}>
                                    <Text style={[styles.categry, { color: !item?.active ? Colors().SecondColor : Colors().ForthGrey, }]}>Magazine</Text>
                                    <View style={styles.divider} />
                                    <Text style={[ styles.Date, { color: !item?.active ? Colors().SecondColor : Colors().ForthGrey, }]}>Monday, 12:30PM</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />

        </>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 75,
        borderRadius: 12,
        marginBottom: 12,
        padding: 2,
        flexDirection: 'row',
    },
    secContainer: {
        width: '75%',
        height: '100%'
    },
    Image: {
        height: '100%',
        width: 75,
        borderRadius: 12,
        marginBottom: 10
    },
    categry: {
        fontSize: 9,
        color: Colors().FirstColor,
        paddingTop: 5,
    },
    Title: {
        fontSize: 13,
        paddingTop: 5,
        paddingHorizontal: 12,
        width: '100%',
        fontWeight: '600'
    },
    divider: {
        height: 3.5,
        width: 3.5,
        backgroundColor: Colors().FirstColor,
        borderRadius: 5,
        marginHorizontal: 5
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        right: 0
    },
    Date: {
        fontSize: 9,
        color: Colors().FirstColor,
        paddingTop: 5,
    }
})
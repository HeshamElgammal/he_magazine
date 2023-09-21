import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SkeletonPlaceholder } from "rn-skeleton-placeholder";
import { TransferDate } from "src/utils/HF";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";
import { width } from "theme/sizes";

const IssuesList = ({
    data,
    loading,
}: {
    data?: any;
    loading?: boolean;
}) => {
    const { navigate } = useNavigation<any>()
    return (
        <>
            {
                loading ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[{}, {}, {}]}
                        renderItem={() => (
                            <View>
                                <SkeletonPlaceholder
                                    itemWidth={140}
                                    itemHeight={240}
                                    itemStyle={styles.Skeleton}
                                />
                            </View>
                        )}
                    />
                    :
                    <FlatList
                        data={data}
                        horizontal
                        style={styles.ListStyle}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <>
                                <TouchableOpacity onPress={() => navigate('IssuesDetails', { id: item?.id })} activeOpacity={.8} style={[styles.container, { marginRight: index == (data?.length - 1) ? 0 : 20, }]}>
                                    <Image
                                        style={styles.Image}
                                        source={{ uri: item?.image }} />
                                    <View style={{
                                        paddingHorizontal: 10,
                                    }}>
                                        <View style={styles.DateContainer}>
                                            <Text style={styles.date}>{TransferDate(item?.date)}</Text>
                                        </View>
                                        <Text numberOfLines={1} style={styles.Title}>{item?.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    />

            }

        </>
    )
}
const styles = StyleSheet.create({
    ListStyle: {
        marginBottom: 40
    },
    container: {
        height: 240,
        width: 140,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#CDCDCD',
    },
    Image: {
        height: '75%',
        width: '100%',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        marginBottom: 10
    },
    DateContainer: {
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        borderRadius: 20,
        maxWidth: 65,
        alignItems: 'center'
    },
    date: {
        fontSize: (7),
        fontWeight: '500',
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().Red,
    },
    Title: {
        fontSize: (16),
        fontFamily: Fonts.PoppinssemiBold,
        color: Colors().SecondColor,
        marginTop: 3
    },
    EmptyContainer: {
        width,
        alignItems: 'center',
        marginVertical: 20
    },
    Skeleton: {
        borderRadius: 14,
        backgroundColor: Colors().SixthColor,
        marginRight: 20,
        marginBottom: 30
    },
})

export default IssuesList
import { useNavigation } from "@react-navigation/native";
import { NoData } from "assets/svgs";
import React from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SkeletonPlaceholder } from "rn-skeleton-placeholder";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";
import { width } from "theme/sizes";

const SecondItemsList = ({
    data,
    horizontal,
    saved,
    loading,
    onHandleEndReached
}: {
    data?: any;
    horizontal?: boolean;
    saved?: boolean;
    loading?: boolean;
    onHandleEndReached?: any
}) => {
    const { navigate } = useNavigation<any>()
    return (
        <>
            {
                loading ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[{}, {}]}
                        renderItem={() => (
                            <View>
                                <SkeletonPlaceholder
                                    itemWidth={160}
                                    itemHeight={166}
                                    itemStyle={styles.Skeleton}
                                />
                                <SkeletonPlaceholder
                                    itemWidth={160}
                                    itemHeight={5}
                                    itemStyle={styles.HeaderSkeleton}
                                />
                                <SkeletonPlaceholder
                                    itemWidth={100}
                                    itemHeight={2}
                                    itemStyle={styles.HeaderSkeleton}
                                />
                                <SkeletonPlaceholder
                                    itemWidth={160}
                                    itemHeight={30}
                                    itemStyle={styles.HeaderSkeleton}
                                />
                            </View>
                        )}
                    />
                    :
                    <>
                        {
                            horizontal ?
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={data}
                                    style={styles.ListStyle}
                                    renderItem={({ item }) => (
                                        <>
                                            <TouchableOpacity activeOpacity={.8} onPress={() => navigate('ArticleDetail', { id: item?.id })} style={{ width: width * .45 }}>
                                                <ImageBackground style={styles.Image} imageStyle={{ borderRadius: 8, }} source={{ uri: item?.mobile_image }} ></ImageBackground>
                                                <View style={styles.categryContainer}>
                                                    <Text style={styles.categry}>{item?.category?.name}</Text>
                                                </View>
                                                <Text numberOfLines={1} style={styles.Title}>{item?.title}</Text>
                                                <View style={styles.divider} />
                                                <Text style={styles.description}>{item?.short_description}</Text>
                                            </TouchableOpacity>

                                        </>
                                    )}
                                />
                                :
                                <FlatList
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    data={data}
                                    onEndReached={data?.length % 15 == 0 ? onHandleEndReached : null}
                                    style={styles.ListStyle}
                                    renderItem={({ item }) => (
                                        <>
                                            <TouchableOpacity activeOpacity={.8} onPress={() => navigate('ArticleDetail', { id: item?.id })} style={{ width: '50%' }}>
                                                <ImageBackground
                                                    style={styles.Image}
                                                    imageStyle={{ borderRadius: 8, }}
                                                    source={{ uri: item?.mobile_image }} >
                                                    {saved && <View style={styles.savedView}>
                                                        <Text style={styles.savedText}>Saved</Text>
                                                    </View>}
                                                </ImageBackground>

                                                <View style={styles.categryContainer}>
                                                    <Text style={styles.categry}>{item?.labels[0]}</Text>
                                                </View>
                                                <Text numberOfLines={2} style={styles.Title}>{item?.title}</Text>
                                                <View style={styles.divider} />
                                                <Text numberOfLines={5} style={styles.description}>{item?.short_description}</Text>

                                            </TouchableOpacity>

                                        </>
                                    )}
                                />
                        }
                    </>

            }

        </>
    )
}
const styles = StyleSheet.create({
    ListStyle: {
    },
    Image: {
        height: 166,
        width: 160,
        borderRadius: 8,
        marginBottom: 10
    },
    categryContainer: {
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        borderRadius: 20,
        maxWidth: 69,
        alignItems: 'center'
    },
    categry: {
        fontSize: (8),
        fontWeight: '500',
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().Red,
    },
    Title: {
        fontSize: (16),
        fontFamily: Fonts.PoppinssemiBold,
        color: Colors().SecondColor,
        marginTop: 3,
        width: '90%',
    },
    divider: {
        height: 1.5,
        backgroundColor: Colors().SecondColor,
        width: '80%',
        marginVertical: 10
    },
    description: {
        fontSize: (9),
        fontFamily: Fonts.PoppinsMedium,
        fontWeight: '400',
        width: 160,
        marginBottom: 25
    },
    EmptyContainer: {
        width,
        alignItems: 'center',
        marginVertical: 20
    },
    Skeleton: {
        borderRadius: 14,
        backgroundColor: Colors().SixthColor,
        marginRight: 20
    },
    HeaderSkeleton: {
        marginTop: 10,
        backgroundColor: Colors().SixthColor,
    },
    savedView: {
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: Colors().Red,
        padding: 2,
        width: '35%',
        alignItems: 'center'
    },
    savedText: {
        fontSize: 12,
        color: Colors().White,
        fontFamily: Fonts.PoppinsMedium
    }
})

export default SecondItemsList
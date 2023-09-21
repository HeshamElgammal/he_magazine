import { useNavigation } from "@react-navigation/native";
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';
import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";
import { width } from "theme/sizes";
import { TransferDate } from "src/utils/HF";
import { useAppDispatch, useAppSelector } from "src/redux/store";
import App, { selectIssueDetail } from "src/redux/app";
const FirstItemsList = ({
    data,
    loading,
    issue
}: {
    data?: any;
    loading?: boolean;
    issue?: boolean;
}) => {
    const { navigate } = useNavigation<any>()
    const IssueDetail = useAppSelector(selectIssueDetail)
    const dispatch = useAppDispatch()
    const [id, setId] = React.useState<number>()
    const Ind = IssueDetail?.items?.findIndex((obj: any) => obj?.model?.id == id)
    useEffect(() => {
        id != undefined && (dispatch(App.changeArticleIndex(Ind)), navigate('InnerTab'))
    }, [id])
    return (
        <>
            {
                loading ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[{}, {}, {}]}
                        renderItem={() => (
                            <SkeletonPlaceholder
                                itemWidth={290}
                                itemHeight={150}
                                itemStyle={styles.Skeleton}
                            />
                        )}
                    />
                    :
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity activeOpacity={.8} onPress={() => {
                                issue ? (
                                    dispatch(App.changePDF(true)),
                                    setId(item?.model?.id)
                                )
                                    : navigate('ArticleDetail', { id: item?.id })
                            }} style={[styles.Container, { marginRight: index == (data?.length - 1) ? 0 : 20, }]}>
                                {/* {console.log(item?.date)} */}
                                <Image style={styles.Image}
                                    source={{ uri: issue ? item?.model?.mobile_image : item?.mobile_image }} />
                                <View style={styles.TextContainer}>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.dateText}>{issue ? item?.model?.category?.name : item?.category?.name}</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.Title}>{issue ? item?.model?.title : item?.title}</Text>
                                    <View style={styles.divider} />
                                    <Text style={styles.description}>{issue ? item?.model?.short_description : item?.short_description}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
            }


        </>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: 290,
        height: 150,
        borderRadius: 14,
        borderWidth: 1.2,
        flexDirection: 'row',
        padding: 2,
        borderColor: '#CDCDCD',
    },
    EmptyContainer: {
        width,
        alignItems: 'center',
        marginVertical: 20
    },
    Image: {
        height: '100%',
        width: '45%',
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14
    },
    TextContainer: {
        padding: 8,
        width: '55%',
        height: '100%'
    },
    dateContainer: {
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        borderRadius: 20,
        maxWidth: 65,
        alignItems: 'center'
    },
    dateText: {
        fontSize: (8),
        fontWeight: '500',
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().Red,
    },
    Title: {
        fontSize: (14),
        fontFamily: Fonts.PoppinssemiBold,
        color: Colors().SecondColor,
        marginTop: 3
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
        color: Colors().SecondColor,
    },
    Skeleton: {
        borderRadius: 14,
        backgroundColor: Colors().SixthColor,
        marginRight: 20
    }
})

export default FirstItemsList
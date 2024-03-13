import { BackVideo, FillHeart, Heart } from "assets/svgs";
import CarouselImages from "components/Carousel Images";
import React from "react";
import { Linking, TouchableOpacity, ScrollView, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { DetailsStyle } from "screens/App/Issues Article Details/styles";
import { selectArticleIndex, selectFavData, selectIssueDetail, selectIssueImages } from "src/redux/app";
import Video from 'react-native-video';
import { width } from "theme/sizes";
import { selectIsAuth } from "src/redux/auth";
import { useAppDispatch } from "src/redux/store";
import AppThunks from "src/redux/app/thunks";
import FastImage from 'react-native-fast-image'
import { TransferDate } from "src/utils/HF";

const PDFContent = ({
    Index,
    setIndex,
    setImageIndex
}: {
    Index?: number
    setIndex?: any;
    setImageIndex?: any;
}) => {
    const dispatch = useAppDispatch()
    const IssueDetail = useSelector(selectIssueDetail)
    const IsAuth = useSelector(selectIsAuth)
    const Ind = useSelector(selectArticleIndex)
    const FavData = useSelector(selectFavData)
    const IssueImages = useSelector(selectIssueImages)
    return (
        <>
            <View style={DetailsStyle.MainContainer}>
                <Carousel
                    useScrollView
                    data={IssueDetail?.items}
                    sliderWidth={width}
                    itemWidth={width}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    initialNumToRender={Ind == 0 ? Index : Ind}
                    initialScrollIndex={1}
                    firstItem={Ind == 0 ? Index : Ind}
                    activeSlideAlignment={'start'}
                    onSnapToItem={(index) => {
                        setImageIndex(IssueImages?.map((object: any) => object?.index).indexOf(index))
                        setIndex(index)
                    }}
                    renderItem={({ item }) => (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {item?.type != 'ad' ?
                                <>
                                    <View style={DetailsStyle.ImagesContainer}>
                                        <View style={DetailsStyle.HeartContainer}>
                                            {item?.model?.category?.name ?
                                                <View style={DetailsStyle.categryContainer}>
                                                    <Text style={DetailsStyle.categry}>{item?.model?.category?.name}</Text>
                                                </View>
                                                :
                                                <View />
                                            }
                                            {
                                                IsAuth &&
                                                <TouchableOpacity activeOpacity={.8} onPress={() => {
                                                    FavData?.findIndex(x => x?.id === item?.model?.id) == -1
                                                        ?
                                                        dispatch(AppThunks.addArticleToFav({ article_id: item?.model?.id })).then(() => {
                                                            dispatch(AppThunks.getFavoriteArticles())
                                                        })
                                                        :
                                                        dispatch(AppThunks.removeArticleFromFav(item?.model?.id)).then(() => {
                                                            dispatch(AppThunks.getFavoriteArticles())
                                                        })
                                                }}>
                                                    {FavData?.findIndex(x => x?.id === item?.model?.id) != -1 ? <FillHeart /> : <Heart />}
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <Text style={DetailsStyle.Title}>{item?.model?.title}</Text>
                                        {item?.model?.short_description && <View style={DetailsStyle.divider} />}
                                        <Text style={DetailsStyle.description}>{item?.model?.short_description}</Text>
                                        {item?.model?.author && <Text style={DetailsStyle.text}>Written by: <Text style={DetailsStyle.boldText}>{item?.model?.author}</Text></Text>}
                                        <Text style={DetailsStyle.text}>{TransferDate(item?.model?.date)}</Text>
                                        <CarouselImages data={item?.model?.gallery} />
                                    </View>

                                    <View style={{ marginTop: 20 }} />
                                    <View style={{ width: '100%', paddingHorizontal: 20 }}>
                                        <FastImage
                                            style={DetailsStyle.Image}
                                            source={{ uri: item?.model?.thumbnail_image, }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                        <RenderHTML
                                            source={{ html: `${item?.model?.content}` }}
                                        />
                                    </View>

                                    <View style={{ height: 140 }} />
                                </>
                                :
                                item?.model?.type == 'image' ?
                                    <>
                                        <View style={DetailsStyle.adContainer}>
                                            <FastImage resizeMode={FastImage.resizeMode.contain} style={DetailsStyle.adImage} source={{ uri: item?.model?.file }} >
                                                {item?.model?.action_url && <TouchableOpacity onPress={() => Linking.openURL(item?.model?.action_url)} style={[DetailsStyle.LearnMoreContainer, { position: 'absolute', bottom: 0 }]}>
                                                    <Text style={DetailsStyle.LearnMore}>Learn more</Text>
                                                    <BackVideo style={{ transform: [{ rotate: '180deg' }] }} />
                                                </TouchableOpacity>}
                                            </FastImage>
                                        </View>

                                    </>
                                    :
                                    <View style={DetailsStyle.adContainer}>
                                        <Video source={{ uri: item?.model?.file }}
                                            style={DetailsStyle.adVideo}
                                            controls={true}
                                            repeat={true}
                                        />
                                        <TouchableOpacity onPress={() => Linking.openURL(item?.model?.action_url)} style={DetailsStyle.LearnMoreContainer}>
                                            <Text style={DetailsStyle.LearnMore}>Learn more</Text>
                                            <BackVideo style={{ transform: [{ rotate: '180deg' }] }} />
                                        </TouchableOpacity>

                                    </View>
                            }
                        </ScrollView>
                    )} />
                <View style={{ marginTop: 90 }} />
            </View>

        </>
    )
}

export default PDFContent
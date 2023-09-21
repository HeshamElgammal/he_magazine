
import { Image, ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectIsAuth, selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { DetailsStyle } from './styles'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import CarouselImages from 'components/Carousel Images'
import App, { selectArticleIndex, selectFavData, selectIssueDetail, selectSelectedArticleIndex } from 'src/redux/app'
import RenderHTML from 'react-native-render-html'
import { height, width } from 'theme/sizes'
import Video from 'react-native-video';
import AppThunks from 'src/redux/app/thunks'
import { BackVideo, FillHeart, Heart } from 'assets/svgs'
import { useSelector } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import { Loader } from '../Article Details/Loader'
const IssuesArticleDetailScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const theme = useAppSelector(selectTheme)
    const IssueDetail = useAppSelector(selectIssueDetail)
    const Index = useAppSelector(selectArticleIndex)
    const ImageIndex = useAppSelector(selectSelectedArticleIndex)
    const IsAuth = useAppSelector(selectIsAuth)
    const FavData = useSelector(selectFavData)
    const [Loading, setLoading] = React.useState<boolean>(true)

    const _fun = () => {
        let images = []
        for (let i = 0; i < IssueDetail?.items?.length; i++) {
            for (let j = 0; j < IssueDetail?.items[i]?.gallery?.length; j++) {
                images.push(IssueDetail?.items[i].gallery[j])
            }
        }
        dispatch(App?.changeIssueImages(images))
        return images
    }
    const _Indexfun = (index: number) => {
        let ind = 0
        let arr = []
        for (let i = 0; i < IssueDetail?.items?.length; i++) {
            arr.push(IssueDetail?.items[i]?.gallery?.length)
        }
        for (let j = 0; j < index; j++) {
            ind += arr[j]
        }
        // alert(ind)
        return (ind)
    }
    useEffect(() => {
        _fun()
        // _Indexfun()
        dispatch(AppThunks.getFavoriteArticles())
    }, [Index])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', (e: any) => {
            _fun()
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 800)
        })
        return unsubscribe
    }, [Index, navigation, ImageIndex])

    return (
        <>
            <SafeAreaView style={DetailsStyle.SafeAreaView}>
                <View style={{ backgroundColor: Colors().FirstColor }}>
                    <GlobalHeader share />
                </View>
                {
                    Loading ?
                        <View style={DetailsStyle.MainContainer}>
                            <Loader />
                        </View>
                        :
                        <View style={DetailsStyle.MainContainer}>
                            <Carousel
                                useScrollView
                                data={IssueDetail?.items}
                                sliderWidth={width}
                                itemWidth={width}
                                inactiveSlideScale={1}
                                inactiveSlideOpacity={1}
                                enableMomentum={true}
                                initialNumToRender={Index}
                                initialScrollIndex={1}
                                firstItem={Index}
                                activeSlideAlignment={'start'}
                                onSnapToItem={(index) => {
                                    // index == 0 ?
                                    //     dispatch(App?.changeSelectedArticleIndex(0))
                                    //     :

                                    //     (dispatch(App?.changeSelectedArticleIndex(_Indexfun(index)))
                                    //         // , alert(JSON.stringify(IssueDetail?.items[index - 1]?.gallery.length))
                                    //     )
                                }}
                                renderItem={({ item }) => (
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {item?.type != 'ad' ?
                                            <>
                                                <View style={DetailsStyle.ImagesContainer}>
                                                    <View style={DetailsStyle.HeartContainer}>
                                                        {item?.model?.labels.length > 0 ?
                                                            <View style={DetailsStyle.categryContainer}>
                                                                <Text style={DetailsStyle.categry}>{item?.model?.labels?.slice(0, 1)}</Text>
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
                                                    <CarouselImages data={item?.model?.gallery} />
                                                </View>

                                                <View style={{ marginTop: 20 }} />
                                                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                                                    <Image source={{ uri: item?.model?.thumbnail_image }} style={DetailsStyle.Image} />
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
                                                        <ImageBackground imageStyle={{ resizeMode: 'contain' }} style={DetailsStyle.adImage} source={{ uri: item?.model?.file }} >
                                                            {item?.model?.action_url && <TouchableOpacity onPress={() => Linking.openURL(item?.model?.action_url)} style={[DetailsStyle.LearnMoreContainer, { position: 'absolute', bottom: -20 }]}>
                                                                <Text style={DetailsStyle.LearnMore}>Learn more</Text>
                                                                <BackVideo style={{ transform: [{ rotate: '180deg' }] }} />
                                                            </TouchableOpacity>}
                                                        </ImageBackground>
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
                        </View>
                }


            </SafeAreaView>
        </>

    )
}


export default IssuesArticleDetailScreen
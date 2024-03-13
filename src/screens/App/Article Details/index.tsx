
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectIsAuth, selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { DetailsStyle } from './styles'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import CarouselImages from 'components/Carousel Images'
import { FillHeart, Heart } from 'assets/svgs'
import AppThunks from 'src/redux/app/thunks'
import { useSelector } from 'react-redux'
import { selectArticleDetail, selectFavData } from 'src/redux/app'
import { useLoadingSelector } from 'src/redux/selectors'
import { Loader } from './Loader'
import RenderHTML from 'react-native-render-html'
import { width } from 'theme/sizes'
import FirstItemsList from 'components/FirstItemsList'
import AppTitle from 'components/App Title'


const ArticleDetailScreen = () => {
    const { id }: any = useRoute().params;
    const theme = useAppSelector(selectTheme)
    const IsAuth = useAppSelector(selectIsAuth)
    const dispatch = useAppDispatch()
    const FavData = useSelector(selectFavData)
    const loading = useLoadingSelector(AppThunks.getSingleArticle())
    const ArticleDetail = useSelector(selectArticleDetail)
    const ind = FavData?.findIndex(x => x?.id === id)

    useEffect(() => {
        dispatch(AppThunks.getFavoriteArticles())
    }, [ind])

    useEffect(() => {
        dispatch(AppThunks.getSingleArticle(id))
    }, [id])

    return (
        <SafeAreaView style={DetailsStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalHeader share />
            </View>
            <View style={DetailsStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading ?
                        <Loader />
                        :
                        <>
                            <View style={DetailsStyle.ImagesContainer}>
                                <View style={DetailsStyle.HeartContainer}>
                                    <View style={DetailsStyle.categryContainer}>
                                        <Text style={DetailsStyle.categry}>{ArticleDetail?.category?.name}</Text>
                                    </View>
                                    {
                                        IsAuth &&
                                        <TouchableOpacity activeOpacity={.8} onPress={() => {
                                            ind == -1
                                                ?
                                                dispatch(AppThunks.addArticleToFav({ article_id: id })).then(() => {
                                                    dispatch(AppThunks.getFavoriteArticles())
                                                })
                                                :
                                                dispatch(AppThunks.removeArticleFromFav(id)).then(() => {
                                                    dispatch(AppThunks.getFavoriteArticles())
                                                })
                                        }}>
                                            {ind != -1 ? <FillHeart /> : <Heart />}
                                        </TouchableOpacity>
                                    }

                                </View>

                                <Text style={DetailsStyle.Title}>{ArticleDetail?.title}</Text>
                                <View style={DetailsStyle.divider} />
                                <Text style={DetailsStyle.description}>{ArticleDetail?.short_description}</Text>
                                <Text style={DetailsStyle.text}>Written by:<Text style={DetailsStyle.boldText}> {ArticleDetail?.author}</Text></Text>

                                <CarouselImages data={ArticleDetail?.gallery} />
                            </View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Image source={{ uri: ArticleDetail?.thumbnail_image }} style={DetailsStyle.Image} />
                                <RenderHTML
                                    source={{ html: `${ArticleDetail?.content}` }}
                                />
                            </View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <AppTitle text='similar articles' />
                                <FirstItemsList loading={loading} data={ArticleDetail?.related_articles} />
                            </View>

                            <View style={{ height: 140 }} />
                        </>
                    }
                </ScrollView>
            </View >

        </SafeAreaView >
    )
}


export default ArticleDetailScreen
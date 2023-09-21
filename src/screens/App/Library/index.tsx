import { Platform, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectIsAuth, selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import SecondItemsList from 'components/SecondItemsList'
import { ShowStyle } from './styles'
import { Colors } from 'theme/colors'
import AppTitle from 'components/App Title'
import FilterList from 'components/FilterList'
import GlobalAppHeader from 'components/App Header without Search'
import { useSelector } from 'react-redux'
import App, { selectCategoryIndex, selectFavData } from 'src/redux/app'
import AppThunks from 'src/redux/app/thunks'
import { useLoadingSelector } from 'src/redux/selectors'
import AnimatedLottieView from "lottie-react-native";
import { Library } from 'assets/Lotties'


const LibraryScreen = () => {
    const theme = useAppSelector(selectTheme)
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const selectindex = useSelector(selectCategoryIndex)
    const isAuth = useSelector(selectIsAuth)
    const FavData = useSelector(selectFavData)
    const loading = useLoadingSelector(AppThunks.getFavoriteArticles())

    useEffect(() => {
        dispatch(AppThunks.getFavoriteArticles())
    }, [])
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            dispatch(App.changeCategoryIndex(-1))
            dispatch(AppThunks.getFavoriteArticles())
            navigation.navigate('Library')
        });
        return unsubscribe
    }, [navigation])

    return (
        <SafeAreaView style={ShowStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalAppHeader />
            </View>
            <View style={ShowStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppTitle text='MY LIBRARY' title />
                    {FavData.length > 0 &&
                        <View style={{ marginTop: -15 }}>
                            <FilterList library selectindex={selectindex} />
                        </View>}
                    <View style={{ height: 10 }} />
                    {
                        FavData.length > 0 ?
                            <SecondItemsList loading={loading} data={FavData} saved />
                            :
                            <View style={ShowStyle.LottieContainer}>
                                <AnimatedLottieView
                                    resizeMode="cover"
                                    loop={true}
                                    autoPlay={true}
                                    source={Library}
                                    style={ShowStyle.Lottie}
                                />
                                <Text style={ShowStyle.Text}>{isAuth ? 'add articles' : ' login first'}</Text>
                            </View>
                    }

                    <View style={{ marginTop: Platform.OS == 'ios' ? 90 : 120 }} />
                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default LibraryScreen

import { Platform, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalAppHeader from 'components/App Header'
import AppTitle from 'components/App Title'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { HomeStyle } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FilterList from 'components/FilterList'
import FirstItemsList from 'components/FirstItemsList'
import SecondItemsList from 'components/SecondItemsList'
import IssuesList from 'components/IssuesList'
import { useDispatch, useSelector } from 'react-redux'
import AppThunks from 'src/redux/app/thunks'
import App, { selectCategoryIndex, selectExploreData, selectHomeCategories, selectHomeMag } from 'src/redux/app'
import { height } from 'theme/sizes'
import { useLoadingSelector } from 'src/redux/selectors'
import { date } from 'yup'


const HomeScreen = () => {
    const theme = useAppSelector(selectTheme)
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const HomeData = useSelector(selectHomeMag)
    const FilterData = useSelector(selectExploreData)
    const HomeCategories = useSelector(selectHomeCategories)
    const loading = useLoadingSelector(AppThunks.getHomeMag())
    const selectindex = useSelector(selectCategoryIndex)

    useEffect(() => {
        dispatch(AppThunks.getHomeMag())
    }, [])
    useEffect(() => {
        dispatch(AppThunks.getAllArticles())
        dispatch(AppThunks.getHomeCategoriesData(HomeCategories[selectindex]?.id))
    }, [selectindex])
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            dispatch(App.changeCategoryIndex(-1))
            dispatch(AppThunks.getHomeMag())
            navigation.navigate('Home')
        });
        return unsubscribe
    }, [navigation])
    return (
        <SafeAreaView style={HomeStyle.SafeAreaView}>
            <GlobalAppHeader />
            <View style={HomeStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height }}>
                    {
                        selectindex == -1 ?
                            <>
                                <AppTitle text='EXPLORE' seemore />

                                <FirstItemsList loading={loading} data={HomeData?.explore_articles ? [...HomeData?.explore_articles]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} />
                                <View style={{ height: 30 }} />
                                {/* <SecondItemsList loading={loading} data={HomeData?.home_articles} /> */}

                                <View style={HomeStyle.divider} />
                                <AppTitle text='RECENT ISSUES' seemore />
                                <IssuesList loading={loading} data={HomeData?.issues ? [...HomeData?.issues]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} />
                            </>
                            :
                            <>
                                <View style={{ height: 30 }} />
                                <SecondItemsList loading={loading} data={FilterData} />
                            </>
                    }
                    <View style={{ marginTop: Platform.OS == 'ios' ? 100 : 130 }} />
                </ScrollView>
            </View>

        </SafeAreaView >
    )
}

export default HomeScreen

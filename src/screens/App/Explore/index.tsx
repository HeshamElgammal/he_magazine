import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalAppHeader from 'components/App Header'
import AppTitle from 'components/App Title'
import { useAppSelector } from 'src/redux/store'
import Auth, { selectTheme } from 'src/redux/auth'
import { HomeStyle } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'theme/colors'
import { FlatList } from 'react-native-gesture-handler'
import Fonts from 'theme/fonsFamily'
import FilterList from 'components/FilterList'
import FirstItemsList from 'components/FirstItemsList'
import SecondItemsList from 'components/SecondItemsList'
import IssuesList from 'components/IssuesList'
import { useDispatch, useSelector } from 'react-redux'
import App, { selectCategoryIndex, selectExploreData, selectExploreMag, selectHomeCategories } from 'src/redux/app'
import AppThunks from 'src/redux/app/thunks'
import { height } from 'theme/sizes'
import { useLoadingSelector } from 'src/redux/selectors'


const ExploreScreen = () => {
    const theme = useAppSelector(selectTheme)
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const ExploreData = useSelector(selectExploreMag)
    const FilterData = useSelector(selectExploreData)
    const loading = useLoadingSelector(AppThunks.getExploreMag())
    const HomeCategories = useSelector(selectHomeCategories)
    const selectindex = useSelector(selectCategoryIndex)

    useEffect(() => {
        dispatch(AppThunks.getExploreMag())
    }, [])
    useEffect(() => {
        dispatch(AppThunks.getHomeCategoriesData(HomeCategories[selectindex]?.id))
    }, [selectindex])
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            dispatch(App.changeCategoryIndex(-1))
            dispatch(AppThunks.getHomeMag())
            dispatch(Auth.chnageChanged(false))
            navigation.navigate('Explore')
        });
        return unsubscribe
    }, [navigation])
    return (
        <SafeAreaView style={HomeStyle.SafeAreaView}>
            <GlobalAppHeader />
            <View style={HomeStyle.MainContainer}>
                <View style={{ height: 50 }}>
                    <FilterList selectindex={selectindex} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        selectindex == -1 ?
                            <>
                                <AppTitle text='LATEST NEWS' seemore />

                                <FirstItemsList loading={loading} data={ExploreData?.latest ? [...ExploreData?.latest]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} />

                                <AppTitle text='FEATURED' seemore />
                                <SecondItemsList loading={loading} data={ExploreData?.featured ? [...ExploreData?.featured]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} horizontal />

                                <View style={HomeStyle.divider} />

                                <AppTitle text='SELECTED' seemore />
                                <SecondItemsList loading={loading} data={ExploreData?.selected ? [...ExploreData?.selected]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} horizontal />
                            </>
                            :
                            <>
                                <View style={{ height: 30 }} />
                                <SecondItemsList loading={loading} data={FilterData ? [...FilterData]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} />
                            </>
                    }
                    <View style={{ marginTop: Platform.OS == 'ios' ? 100 : 130 }} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default ExploreScreen

import { ActivityIndicator, FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import SecondItemsList from 'components/SecondItemsList'
import { ShowStyle } from './styles'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import AppTitle from 'components/App Title'
import AppThunks from 'src/redux/app/thunks'
import { useSelector } from 'react-redux'
import App, { selectAllIssues, selectExploreData, selectNextPage } from 'src/redux/app'
import { useLoadingSelector } from 'src/redux/selectors'
import { TransferDate } from 'src/utils/HF'
import Fonts from 'theme/fonsFamily'
import { width } from 'theme/sizes'
import IssuesList from 'components/IssuesList'


const ShowMoreScreen = () => {
    const theme = useAppSelector(selectTheme)
    const navigation = useNavigation<any>()
    const { title }: any = useRoute().params;
    const dispatch = useAppDispatch()
    const [limit, setLimit] = React.useState<number>(1)
    const NextPage = useSelector(selectNextPage)
    const ExploreData = useSelector(selectExploreData)
    const AllIssues = useSelector(selectAllIssues)
    const [load2, setLoad2] = React.useState(false)
    console.log(ExploreData[3]?.date)
    console.log(limit)
    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(App.changeExploreData([]))
            dispatch(App.changeAllIssues([]))

            title == 'EXPLORE' ?
                dispatch(AppThunks.getExploreArticles(limit))
                :
                title == 'LATEST' ?
                    dispatch(AppThunks.getLatestArticles(limit))
                    :
                    title == 'FEATURED' ?
                        dispatch(AppThunks.getFeaturedArticles(limit))
                        :
                        title == "RECENT ISSUES" ?
                            dispatch(AppThunks.getAllIssues(limit))
                            :
                            dispatch(AppThunks.getSelectedArticles(limit))
        })
        return RenderFunction
    }, [navigation])

    function handleInfinityScroll(event: any) {
        let mHeight = event?.nativeEvent.layoutMeasurement.height;
        let cSize = event?.nativeEvent.contentSize.height;
        let Y = event?.nativeEvent.contentOffset.y;
        if (Math.ceil(mHeight + Y) >= cSize) return true;
        return false;
    }

    React.useEffect(() => {
        { limit > 1 && setLoad2(true) }
        {
            limit > 1 && (title == 'EXPLORE' ?
                dispatch(AppThunks.getExploreArticles(limit)).then(() => { setLoad2(false) })
                :
                title == 'LATEST' ?
                    dispatch(AppThunks.getLatestArticles(limit)).then(() => { setLoad2(false) })
                    :
                    title == 'FEATURED' ?
                        dispatch(AppThunks.getFeaturedArticles(limit)).then(() => { setLoad2(false) })
                        :
                        title == "RECENT ISSUES" ?
                            null
                            :
                            dispatch(AppThunks.getSelectedArticles(limit))).then(() => { setLoad2(false) })
        }
    }, [limit])

    return (
        <SafeAreaView style={ShowStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalHeader />
            </View>
            <View style={ShowStyle.MainContainer}>
                <AppTitle text={title} />
                <View style={{ height: 10 }} />
                {
                    title == "RECENT ISSUES" ?
                        <FlatList
                            data={AllIssues}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            onMomentumScrollEnd={(event) => { if (handleInfinityScroll(event)) { (AllIssues?.length % 15 == 0 && limit != NextPage) && setLimit(limit + 1) } }}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('IssuesDetails', { id: item?.id })} activeOpacity={.8} style={[styles.verticalContainer]}>
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
                            )}
                        />

                        :
                        <>
                            <SecondItemsList data={ExploreData} onMomentumScrollEnd={(event: any) => { if (handleInfinityScroll(event)) { ((ExploreData ? [...ExploreData]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : [])?.length % 15 == 0 && limit != NextPage) && setLimit(limit + 1) } }} />
                            {load2 && <ActivityIndicator size={25} color={Colors().SecondColor} />}
                        </>
                }

                <View style={{ marginTop: Platform.OS == 'ios' ? 100 : 130 }} />

            </View>

        </SafeAreaView >
    )
}

export default ShowMoreScreen

const styles = StyleSheet.create({
    ListStyle: {
        marginBottom: 40
    },
    verticalContainer: {
        height: 240,
        width: '45%',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        marginBottom: 25
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
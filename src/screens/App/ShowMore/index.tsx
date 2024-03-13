import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    const NextPage = useSelector(selectNextPage)
    const ExploreData = useSelector(selectExploreData)
    const AllIssues = useSelector(selectAllIssues)
    const issuesLoading = useLoadingSelector(AppThunks.getAllIssues())
    const articlesLoading = useLoadingSelector(AppThunks.getAllIssues())

    useEffect(() => {
        const RenderFunction = navigation.addListener('focus', () => {
            dispatch(App.changeExploreData([]))
            dispatch(App.changeAllIssues([]))

            title == 'EXPLORE' ?
                dispatch(AppThunks.getExploreArticles(1))
                :
                title == 'LATEST' ?
                    dispatch(AppThunks.getLatestArticles(1))
                    :
                    title == 'FEATURED' ?
                        dispatch(AppThunks.getFeaturedArticles(1))
                        :
                        title == "RECENT ISSUES" ?
                            dispatch(AppThunks.getAllIssues(1))
                            :
                            dispatch(AppThunks.getSelectedArticles(1))


        })
        return RenderFunction
    }, [navigation])
    const onHandleEndReachedIssues = () => {
        if (!issuesLoading) {
            dispatch(AppThunks.getAllIssues(NextPage))
        }
    }
    const onHandleEndReached = () => {
        if (!articlesLoading) {
            title == 'EXPLORE' ?
                dispatch(AppThunks.getExploreArticles(NextPage))
                :
                title == 'LATEST' ?
                    dispatch(AppThunks.getLatestArticles(NextPage))
                    :
                    title == 'FEATURED' ?
                        dispatch(AppThunks.getFeaturedArticles(NextPage))
                        :
                        title == "RECENT ISSUES" ?
                            null
                            :
                            dispatch(AppThunks.getSelectedArticles(NextPage))
        }
    }

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
                            data={AllIssues ? [...AllIssues]?.sort((a: any, b: any) => new Date(a?.date) - new Date(b?.date)) : []}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            onEndReached={AllIssues?.length % 15 == 0 ? onHandleEndReachedIssues : null}
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
                        // <ScrollView showsVerticalScrollIndicator={false}>
                        <SecondItemsList data={ExploreData ? [...ExploreData]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} onHandleEndReached={onHandleEndReached} />
                    // </ScrollView >

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
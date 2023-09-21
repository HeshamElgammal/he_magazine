import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AppTitle from 'components/App Title'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { DetailsStyle } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Colors } from 'theme/colors'
import FirstItemsList from 'components/FirstItemsList'
import IssuesList from 'components/IssuesList'
import GlobalHeader from 'components/Header'
import CustomBtn from 'components/CustomBtn'
import App, { selectHomeMag, selectIssueDetail } from 'src/redux/app'
import { useLoadingSelector } from 'src/redux/selectors'
import AppThunks from 'src/redux/app/thunks'
import RenderHTML from 'react-native-render-html'
import { width } from 'theme/sizes'
import { useSelector } from 'react-redux'
import { Loader } from './Loader'


const IssuesDetailsScreen = () => {
    const { id }: any = useRoute().params;
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectTheme)
    const IssueDetail = useAppSelector(selectIssueDetail)
    const HomeData = useSelector(selectHomeMag)
    const loading = useLoadingSelector(AppThunks.getIssueDetail())

    useEffect(() => {
        dispatch(AppThunks.getIssueDetail(id))
    }, [id])
    return (
        <SafeAreaView style={DetailsStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalHeader share />
            </View>
            <View style={DetailsStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading ?
                        <>
                            <Loader />
                        </>
                        :
                        <>
                            <Image style={{ height: 200, width: '100%', borderRadius: 10, marginVertical: 25, }} resizeMode='contain' source={{ uri: IssueDetail?.image }} />
                            <Text style={DetailsStyle.Title}>{IssueDetail?.title}</Text>
                            <View style={DetailsStyle.divider2} />
                            <RenderHTML
                                contentWidth={width * .9}
                                source={{ html: `${IssueDetail?.description}` }}
                            />
                        </>
                    }

                    <CustomBtn
                        pending={loading}
                        title={"Read"}
                        onClick={() => {
                            navigate('InnerTab')
                            dispatch(App.changeArticleIndex(0))
                        }}
                        StylesBtn={{ marginVertical: 15 }}
                        color='dark'
                    />
                    {/* {console.log(JSON.stringify(IssueDetail?.items?.filter((key: any) => key?.type == 'article')))} */}
                    <AppTitle text='IN THIS ISSUES' />
                    <FirstItemsList loading={loading} issue data={IssueDetail?.items ? [...IssueDetail?.items?.filter((key: any) => key?.type == 'article')]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} />

                    <View style={DetailsStyle.divider} />
                    {
                        HomeData?.issues?.filter((key: any) => key?.id != id).length > 0 &&
                        <AppTitle text='RECENT ISSUES' seemore />
                    }
                    <IssuesList loading={loading} data={HomeData?.issues?.filter((key: any) => key?.id != id)} />

                    <View style={{ marginTop: 100 }} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default IssuesDetailsScreen

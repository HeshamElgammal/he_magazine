import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import SecondItemsList from 'components/SecondItemsList'
import { SearchStyle } from './styles'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import AnimatedLottieView from "lottie-react-native";
import { selectAllArticles, } from 'src/redux/app'
import { useSelector } from 'react-redux'
import { NoMagazine } from 'assets/Lotties'


const SearchScreen = () => {
    const theme = useAppSelector(selectTheme)
    const { navigate } = useNavigation<any>()
    const AllArticles = useSelector(selectAllArticles)
    const [text, setText] = React.useState<any>('')
    const [Filter, setFilter] = React.useState<any>(AllArticles ? [...AllArticles]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : [])


    return (
        <SafeAreaView style={SearchStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalHeader search text={text} data={AllArticles ? [...AllArticles]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []} setFilter={setFilter} updateSearch={setText} />
            </View>
            <View style={SearchStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: 30 }} />
                    {
                        Filter.length > 0 ?
                            <SecondItemsList data={Filter} />
                            :
                            <View style={SearchStyle.LottieContainer}>
                                <AnimatedLottieView
                                    resizeMode="cover"
                                    loop={true}
                                    autoPlay={true}
                                    source={NoMagazine}
                                    style={SearchStyle.Lottie}
                                />
                                <Text style={SearchStyle.Text}>no articles found</Text>
                            </View>
                    }

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default SearchScreen

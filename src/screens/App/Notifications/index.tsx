import { ScrollView, View } from 'react-native'
import React from 'react'
import { useAppSelector } from 'src/redux/store'
import { selectTheme } from 'src/redux/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import SecondItemsList from 'components/SecondItemsList'
import { ShowStyle } from './styles'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import AppTitle from 'components/App Title'
import NotificationItem from 'components/Notification Item'


const NotificationsScreen = () => {
    const theme = useAppSelector(selectTheme)
    const { navigate } = useNavigation<any>()
    // const { title }: any = useRoute().params;

    return (
        <SafeAreaView style={ShowStyle.SafeAreaView}>
            <View style={{ backgroundColor: Colors().FirstColor }}>
                <GlobalHeader />
            </View>
            <View style={ShowStyle.MainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppTitle text='NOTIFICATIONS' />
                    <View style={{ height: 10 }} />
                    <NotificationItem data={[{ active: true }, { active: true }, { active: false }, { active: false }, { active: false }, { active: false }]} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default NotificationsScreen

import { StatusBar, } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import { Store, } from 'src/redux/store'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreens from 'navigation'
import Toast from "react-native-toast-message";
import messaging from '@react-native-firebase/messaging';
import { getToken, remoteMessage, requestPermissions, subscribeToTopic } from 'src/utils/HF';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import DeviceInfo from 'react-native-device-info';



const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    subscribeToTopic()
    requestPermissions()
    remoteMessage()
    getToken()
    const unsubscribe = messaging().onMessage(async (message: any) => {
      const token = await DeviceInfo.getDeviceToken()
      console.warn(token)
      console.log('Message', message)
    })
    return unsubscribe
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store().store}>
        <StatusBar backgroundColor={'#131313'} barStyle={'light-content'} />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <PersistGate loading={null} persistor={Store().persistor}>
              {/* <HandleDeepLinking /> */}
              <RootStackScreens />
            </PersistGate>
          </NavigationContainer>
        </SafeAreaProvider>
        <Toast topOffset={50} />
      </Provider>
    </QueryClientProvider>
  )
}

export default App


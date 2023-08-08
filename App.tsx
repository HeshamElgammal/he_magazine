import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import { Store, useAppDispatch, useAppSelector } from 'src/redux/store'
// import { GlobalStyle } from 'src/styles/global'
import User, { selectTheme } from 'src/redux/User'
import GlobalHeader from 'components/Header'
import { Colors } from 'theme/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Login from 'screens/Authentication/Login'

const App = () => {
  return (
    <Provider store={Store().store}>
      <PersistGate loading={null} persistor={Store().persistor}>
        <Container />
      </PersistGate>
    </Provider>
  )
}
const Container = () => {
  const theme: String = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  // const dynamicStyles = GlobalStyle();

  // console.log(theme);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View
            style={{
              backgroundColor: "#131313",
            }}>
            <StatusBar
              backgroundColor={"#131313"}
              barStyle="dark-content"
            />
          </View>
        {/* <Root /> */}
        {/* <Toast config={toastConfig} topOffset={70} /> */}
        <Login />
      </GestureHandlerRootView>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
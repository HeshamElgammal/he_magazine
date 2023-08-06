import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import { Store, useAppDispatch, useAppSelector } from 'src/redux/store'
import { GlobalStyle } from 'src/styles/global'
import User, { selectTheme } from 'src/redux/User'

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
  const dynamicStyles = GlobalStyle();

  // console.log(theme);

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <Text style={dynamicStyles.text1}>He Magazine</Text>
      <TouchableOpacity
        style={dynamicStyles.btn}
        onPress={() => {
          dispatch(User.slice.actions.chnageTheme(theme == "light" ? "dark" : "light"))
        }}
      >
        <Text style={dynamicStyles.text1}>Change them</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})
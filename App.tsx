import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'src/redux/store'
import PersistReducer from 'redux-persist/lib/persistReducer'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={Store().store}>
      <PersistGate loading={null} persistor={Store().persistor}>
        <View>
          <Text>App</Text>
        </View>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
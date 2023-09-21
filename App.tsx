import { StatusBar, } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import { Store, } from 'src/redux/store'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreens from 'navigation'
import Toast from "react-native-toast-message";
import CodePush from "react-native-code-push";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};
const App = () => {
  useEffect(() => {
    CodePush.sync({
      updateDialog: { title: "A new update is Available" },
      installMode: CodePush.InstallMode.IMMEDIATE,
    }).catch((e) => Toast.show({ type: "error", text2: e }));
  }, []);
  return (
    <Provider store={Store().store}>
      <StatusBar backgroundColor={'#131313'} barStyle={'light-content'} />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <PersistGate loading={null} persistor={Store().persistor}>
            <RootStackScreens />
          </PersistGate>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast topOffset={50} />
    </Provider>
  )
}
export default CodePush(CodePushOptions)(() => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store().store}>
        <App />
      </Provider>
    </QueryClientProvider>
  );
});

// export default App


import { LogBox, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { store } from './src/Redux/configureStore';
import { Provider } from 'react-redux';
import Root from './src/Navigation/Root';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
      <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Root />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
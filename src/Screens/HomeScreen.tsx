import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const { MyDemoKotlin } = NativeModules;

const HomeScreen = () => {
    const navigation = useNavigation();
    {console.log('NativeModules:', MyDemoKotlin);}
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title="Show Kotlin Toast"
      onPress={() => MyDemoKotlin.showToast('Hello from Kotlin Native!')}
    />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
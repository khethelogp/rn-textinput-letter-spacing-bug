import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      showsVerticalScrollIndicator={false}
    >
      <ListItem title="TextInput with letterSpacing bug" showChevron onPress={() => {
        navigation.navigate('Screen1' as never)
      }} />
      <ListItem title="Other TextInput" showChevron onPress={() => {
        navigation.navigate('Screen2' as never)
      }} />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
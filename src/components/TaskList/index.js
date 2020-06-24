import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function TaskList() {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="md-checkmark-circle" size={30} color="#121212"/>
      </TouchableOpacity>
      <View>
        <Text>Comprar Pão</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  }
})
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, 
  TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import TaskList from './src/components/TaskList'
import * as Animatable from 'react-native-animatable'

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const [task, setTask] = useState([
    { key: 1, task: 'Comprar Pão' },
    { key: 2, task: 'Estudar React Native' },
    { key: 3, task: 'Fazer caminhada na Praça' },
    { key: 4, task: 'Comprar Carne para fazer almoço' },
    { key: 5, task: 'Descançar pois ninguém é de ferro' },
  ])

  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171B31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <FlatList 
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({ item }) => <TaskList data={item} />}      
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          
        <View style={styles.modalHeader}>
            <TouchableOpacity onPress={ () => setOpen(false) }>
              <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}> Nova Tarefa </Text>
          </View>

          <View style={styles.modalBody}>
            <TextInput 
              multiline={true}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder="O que precisa fazer hoje?"
              style={styles.input}
            />

            <TouchableOpacity style={styles.handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        
          </SafeAreaView>
      </Modal>

      <AnimateBtn 
        style={styles.fab}
        useNativeDriver
        animation="bounceInUp"
        duraction={3500}
        onPress={ () => setOpen(true) }
      >
        <Ionicons name="ios-add" size={35} color="#FFF" />
      </AnimateBtn>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171B31',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 10
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#0094FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },
  modal: {
    flex: 1,
    backgroundColor: '#171D31'
  },
  modalHeader: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 20,
    color: '#FFF'
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 8
  },
  handleAdd: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    height: 40
  },
  handleAddText: {
    fontSize: 20
  }
});

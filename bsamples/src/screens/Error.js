import React from 'react';
import {View,  Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


class Error extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialIcons name="error-outline" size={50} color="black" />
        <Text style={styles.txt}>Ошибка загрузки компонентов</Text>
        <Text>Подождите или перезагрузите приложение</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
  },
  txt: {
    fontSize: 17,
    fontWeight: 'bold'
  }
})

export default Error
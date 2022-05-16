import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

 
class Start extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.paragraph}>
          Добро пожаловать в Bsamples! Здесь вы можете быстро создать шаблон для электронного письма!
        </Text>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/images/startMail.gif')} style={styles.gif}/>
        </View>
          
        <Text style={styles.paragraph}>
          Выберите как вы хотите сформировать шаблон
        </Text>
          
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {this.props.navigation.navigate("Выбор данных")}} >
            <Text style={styles.btnText}>Выбрать из предложенных</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.btnContainer} 
            onPress={() => {this.props.navigation.navigate("Ввод данных")}} >
            <MaterialIcons name="create" size={24} color="white" />
            <Text style={styles.btnText}>Создать свой шаблон</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signContainer}>
            <MaterialIcons name="copyright" size={15} color="#7B7E7F" />
            <Text style={styles.sign}>Bsamples</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,    
  },

  functional: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  gif: {
    width:250, 
    height:260,
    marginRight:55,
    },

  paragraph: {
    fontFamily: 'uaBrandBold',
    fontSize: 17,
    color: '#2c4a52',
    textAlign: 'center',
    marginTop: 70,
    width: 367,
  },
 
  btnContainer: {
    flexDirection:'row',
    borderRadius: 10,
    borderWidth:3,
    borderColor:'white', 
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#483D8B',
    height: 50, 
    width: 250, 
    marginTop: 25
    
  }, 
  btnText: {
    color: 'white',
    fontSize:15,
    fontFamily: 'uaBrand'
  },

  signContainer: {
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop:50
  },

  sign: {
      color: '#7B7E7F',
      fontSize:13,
      fontFamily: 'uaBrand',
  }
});
export default Start;
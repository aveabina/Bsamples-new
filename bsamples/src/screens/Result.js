import React from 'react';
import { Text, View, ScrollView, Clipboard, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

class Result extends React.Component  {
  
  render() {
    
    const data = this.props.navigation.getParam('data', () => {})

    let sample = ''

    for (let i=0; i<data.length; i++) {
      sample = sample + data.sort()[i].substr(1)+ '\n';  
    }
    function copy() {
      Clipboard.setString(sample)
      Alert.alert("Скопировано!")
    }
    
    return (
      <ScrollView style={styles.container}>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/images/result.png')} style={styles.img}/>
        </View>

        <Text style={styles.paragraph}> Готово! </Text>
        <Text style={styles.paragraph}> Скопируйте текст и вставьте в сообщение </Text>

        <View style={{alignItems: 'center',}}>
          <View style={styles.result}>    
            <Text style={styles.resultText}> {sample} </Text>
          </View>
        </View>
          
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btnContainer} onPress={copy}>
            <MaterialIcons name="content-copy" size={24} color="white" />
            <Text style={styles.btnText}>Скопировать</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={ () => this.props.navigation.goBack() }>
            <AntDesign name="back" size={24} color="white" />
            <Text style={styles.btnText}>Назад</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btnContainer}
            onPress={() => this.props.navigation.popToTop()}>
            <MaterialCommunityIcons name="backburger" size={24} color="white" />
          <Text style={styles.btnText}>Начало</Text>
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
    
    flex: 1,    
  },

  paragraph: {
    fontFamily: 'uaBrandBold',
    fontSize: 17,
    color: '#2c4a52',
    textAlign: 'center',
    marginTop: 15,
  },

  img: {
    width:300, 
    height:80,
    marginTop:30
  },

  result: {
    borderColor:'#B0C4DE',
    backgroundColor: '#F5F5FC',
    borderWidth:1, 
    borderRadius:10,
    margin: 15,
    alignItems:'center',
    justifyContent:'center',
    height:250,
    width:350
  },

  resultText: {
    fontFamily: 'uaBrand',
    fontSize: 15,
    color: '#2c4a52'
  },

  btnContainer: {
    backgroundColor: '#483D8B',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    height: 50, 
    width: 250, 
    borderRadius: 10,
    borderWidth:3,
    borderColor:'white',
    marginTop: 25
  }, 
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    fontFamily: 'uaBrand'
  },  

  signContainer: {
    marginRight:15,
    marginTop:50,
    flexDirection:'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  sign: {
    fontFamily: 'uaBrand',
    color: '#7B7E7F',
  }
})
export default Result;
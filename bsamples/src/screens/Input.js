import React from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

class Input extends React.Component {
  
  render() {   
    let first, second, third, fourth, fifth
    first = second = third = fourth = fifth = '';

// Подготовка данных к отправке на результирующий экран  
    function preparing() {
      let selected = []
      let variables = [first, second, third, fourth, fifth]  // Определим обновленные значения переменных
      for (let i=0; i<variables.length; i++) {               // В цикле проходимся по всем переменным 
        if (variables[i].length > 0) {                       // Если длина значения переменной > 0 -> оно было изменено
          selected.push(variables[i])                          // Добавляем в массив с результатом
        }
      }
      return selected
    }
    
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.paragraph}>Следуйте указаниям и создайте самостоятельно собственный шаблон! </Text>

          <Text style={styles.sectionHeader}>Приветствие</Text>
          <View>
            <Text style={styles.description}>Поприветствуйте адресата, можете обратиться по имени или должности</Text>
            <TextInput 
              multiline={true}
              style={styles.inputConteiner} 
              placeholder='Здравствуйте, добрый день, приветствую' 
              onChangeText={(txt) =>  first = '1'+txt} />
          </View>

          <Text style={styles.sectionHeader}>Вступление</Text>
          <View>
            <Text style={styles.description}>Здесь вы можете откликнуться на предыдущее сообщение, кратко описать причину письма</Text>
            <TextInput 
            multiline={true}
            style={styles.inputConteiner} 
            placeholder='Письмо получено, пишу чтобы обсудить детали' 
            onChangeText={(txt) => second = '2'+txt} />
          </View>

          <Text style={styles.sectionHeader}>Основная часть</Text>
          <View>
            <Text style={styles.description}>Подробно изложите информацию, задайте интересующие вопросы, выразите свои мысли </Text>
            <TextInput 
            multiline={true}
            style={styles.inputConteiner} 
            placeholder='Хочу обсудить проект... , информируем вас о встрече...' 
            onChangeText={(txt) => third = '3'+txt} />
          </View>

          <Text style={styles.sectionHeader}>Заключение</Text>
          <View>
            <Text style={styles.description}>Сделайте выводы или подытожьте написанное, озвучьте решения или просьбы </Text>
            <TextInput 
            multiline={true}
            style={styles.inputConteiner} 
            placeholder='В итоге было принято ... , прошу ответить поскорее...' 
            onChangeText={(txt) => fourth = '4'+txt} />
          </View>

          <Text style={styles.sectionHeader}>Прощание</Text>
          <View>
            <Text style={styles.description}>Завершите письмо формулой вежливости, подписью</Text>
            <TextInput 
            multiline={true}
            style={styles.inputConteiner} 
            placeholder='Буду ждать вашего ответа, хорошего дня' 
            onChangeText={(txt) => fifth = '5'+txt} />
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                let result=preparing();
                this.props.navigation.navigate("Результат", {data: result})
                } 
              }>
              <AntDesign name="check" size={24} color="white" />
              <Text style={styles.btnText}>Готово</Text>
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
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E6E6FA',
  },

  sectionHeader: {
    fontFamily: 'uaBrandBold',
    marginBottom: 10,
    textAlign:'center',
    fontSize: 19,
    backgroundColor: '#DFF0FF',
  },

  paragraph: {
    fontFamily: 'uaBrandBold',
    fontSize: 17,
    color: '#2c4a52',
    textAlign: 'center',
    margin: 20,
    width: 367,
  },

  inputConteiner: {
    fontFamily: 'uaBrand',
    margin: 12,
    height: 60,
    borderWidth: 1,
    borderRadius:10,
    color:"#2c4a52"
  }, 

  description: {
    fontFamily: 'uaBrand',
    fontSize: 15,
    margin: 5
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
    marginTop:50,
    marginBottom:10,
    marginRight:15,
    flexDirection:'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  sign: {
      color: '#7B7E7F',
      fontSize:13,
      fontFamily: 'uaBrand',
  }
});
export default Input;
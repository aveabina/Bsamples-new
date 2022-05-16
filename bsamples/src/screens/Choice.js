import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

let radio_props1 = [
{label: "Здравствуйте,", value: 0},
{label: "Приветствую вас,", value: 1},
{label: "Доброе утро,", value: 2},
{label: "Добрый день,", value: 3},
{label: "Добрый вечер,", value: 4},
];
let radio_props2 = [
{label: "Спасибо за ваше письмо", value: 0},
{label: "Ваше письмо получено", value: 1},
{label: "Благодарю вас за проявленый интерес", value: 2},
{label: "Спасибо за информацию", value: 3},
{label: "Информация принята к сведению", value: 4},
{label: "Выражаю искреннюю признательность", value: 5}
];

let radio_props3 = [
{label: "Пишу вам чтобы обсудить детали моей работы" , value: 0},
{label: "Отправляю вам письмо с информацией о предстоящей встрече" , value: 1},
{label: "Предлагаю вам следующий вариант, он прикреплен во вложениях" , value: 2},
{label: "Обращаю внимание на некоторые детали, которые описаны ниже" , value: 3},
{label: "Были рассмотрены предложенные варианты и отобраны наиболее подходящие " , value: 4},
{label: "Пожалуйста, пришлите необходимые документы " , value: 5},
]

let radio_props4 = [
{label: "Итак, я думаю данный вариант будет правильным решением" , value: 0},
{label: "Прошу дать ответ как можно скорее" , value: 1},
{label: "На мой взгляд, решение верно " , value: 2},
{label: "В итоге, было принято решение отказать" , value: 3},
{label: "В итоге, было принято решение утвердить" , value: 4},
]

let radio_props5 = [
{label: "Надеюсь на вашу обратную связь" , value: 0},
{label: "Заранее благодарю за обратную связь" , value: 1},
{label: "Буду ждать вашего ответа" , value: 2},
{label: "Надеюсь на дальнейшее сотрудничество" , value: 3}
]

class Choice extends React.Component  {

  render() {

    let first, second, third, fourth, fifth
    first = second = third = fourth = fifth = ''

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
        <View>
          <Text style={styles.sectionHeader}>Приветствие</Text>
          <RadioForm
            buttonSize={15}
            buttonColor={'#2d4262'}
            labelStyle={styles.label}
            radio_props={radio_props1}
            initial={false}
            onPress={(item) => first = '1'+radio_props1[item].label} />
        </View>

        <View style={{marginTop: 35}}>
          <Text style={styles.sectionHeader}>Вступление</Text>
          <RadioForm
            buttonSize={15}
            buttonColor={'#2d4262'}
            labelStyle={styles.label}
            radio_props={radio_props2}
            initial={false}
            onPress={(item) => second = '2'+radio_props2[item].label} />
        </View>

        <View style={{marginTop: 35}}>
          <Text style={styles.sectionHeader}>Основная часть</Text>
          <RadioForm
            buttonSize={15}
            buttonColor={'#2d4262'}
            labelStyle={styles.label}
            radio_props={radio_props3}
            initial={false}
            onPress={(item) => third = '3'+radio_props3[item].label} />
        </View>

        <View style={{marginTop: 35}}>
          <Text style={styles.sectionHeader}>Заключение</Text>
          <RadioForm
            buttonSize={15}
            buttonColor={'#2d4262'}
            labelStyle={styles.label}
            radio_props={radio_props4}
            initial={false}
            onPress={(item) => fourth = '4'+radio_props4[item].label} />
        </View>

        <View style={{marginTop: 35}}>
          <Text style={styles.sectionHeader}>Прощание</Text>
          <RadioForm
            buttonSize={15}
            buttonColor={'#2d4262'}
            labelStyle={styles.label}
            radio_props={radio_props5}
            initial={false}
            onPress={(item) => fifth = '5'+radio_props5[item].label} />
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
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    flex: 1,
  },

  label: {
    fontFamily: 'uaBrand',
    fontSize: 18, 
    color: '#2f2e33', 
    marginBottom: 10, 
    width: 380
  },
  
  sectionHeader: {
    fontFamily: 'uaBrandBold',
    marginBottom: 10,
    textAlign:'center',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#FEECFD',
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
    marginTop:50,
    marginBottom:10,
    marginRight:15,
    flexDirection:'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  
  sign: {
    fontFamily: 'uaBrand',
    color: '#7B7E7F',
  }
});
export default Choice;

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Start from '../screens/Start';
import Choice from '../screens/Choice';
import Input from '../screens/Input';
import Result from '../screens/Result';


const stackNavigatorOptions = { headerShown:true, headerTitleStyle: {color:'#f5f0e1', fontFamily: 'uaBrand'}, headerStyle: {backgroundColor:'#5d76cb'} }

const AppNavigator = createStackNavigator(
  { 
  
  "Начало работы":{screen:Start},
  "Выбор данных":{screen:Choice},
  "Ввод данных":{screen:Input},
  "Результат":{screen:Result},
  }, 
  {defaultNavigationOptions: stackNavigatorOptions});
  
const AppContainer = createAppContainer(AppNavigator); 

export default AppContainer;


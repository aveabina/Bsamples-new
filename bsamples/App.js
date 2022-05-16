import React from 'react';
import AppContainer from './src/navigations/AppNavigator';
import * as Font from "expo-font"
import Error from "./src/screens/Error"

export default class App extends React.Component {
  
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      "ComicSansMS": require("./src/assets/fonts/ComicSansMS.ttf"),
      "uaBrand": require("./src/assets/fonts/ua-BRAND-regular.otf"),
      "uaBrandBold": require("./src/assets/fonts/ua-BRAND-bold.otf"),
    });
    this.setState({isFontLoaded:true})
  }

  render() {
    return (
        (this.state.isFontLoaded === true) ? (<AppContainer/>):(<Error/>)
    )
  }
}

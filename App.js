
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
//Para ver en navigator descomentar esta linea y cambiar <RegisterScreen/> por <AppContainer/>
import AppContainer from './components/Navigator/MainNavigator';
import RegisterScreen from './components/screen/RegisterScreen';
import LoginScreen from './components/screen/LoginScreen';
import PedirFleteScreen from './components/screen/PedirFleteScreen';
import ViajeScreen from './components/screen/ViajeScreen';
import ContactarConductorScreen from './components/screen/ContactarConductorScreen';
export default class HomeScreen extends React.Component {
  //Para ver la pantalla de registro cambiar <AppContainer/> por <RegisterScreen/>
  //Para ver la pantalla de Login cambiar <AppContainer/> por <LoginScreen/>
  render() {
    return (
      <AppContainer/>
    );
  }
}
//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen
//  }
//});

//export default createAppContainer(HomeScreen);

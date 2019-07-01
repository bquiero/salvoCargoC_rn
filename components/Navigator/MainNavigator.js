
// En este archivo se crea el menú Hamburguesa

import React from "react";
//Se importan los componentes que se utilizarán
import { View,
   Text,
   SafeAreaView,
   ScrollView,
   Dimension,
   Image
 } from "react-native";
 //Se importan los conponentes para la navegación
import { createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
//Se importan las vistas o pantallas de la aplicación
import {Icon } from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen'
import RegisterScreen from '../screen/RegisterScreen'
import RegistrarScreen from '../screen/RegistrarScreen'
import LoginScreen from '../screen/LoginScreen'
import MainPageScreen from '../screen/MainPageScreen'
import PedirFleteScreen from '../screen/PedirFleteScreen'
import InformacionFleteScreen from '../screen/InformacionFleteScreen'
import EsperarConductorScreen from '../screen/EsperarConductorScreen'
import ContactarConductorScreen from '../screen/ContactarConductorScreen'
import LlamarConductorScreen from '../screen/LlamarConductorScreen'
import ViajeScreen from '../screen/ViajeScreen'
import EvaluacionScreen from '../screen/EvaluacionScreen'
//Se importa el Menu
import DrawerRoot from './DrawerRoot'

const PrincipalStack = createStackNavigator({
  MenuDrawer: DrawerRoot,
  MainPage: MainPageScreen,
  PedirFlete: PedirFleteScreen,
  InformacionFlete: InformacionFleteScreen,
  EsperarConductor: EsperarConductorScreen,
  ContactarConductor: ContactarConductorScreen,
  LlamarConductor: LlamarConductorScreen,
  Viaje: ViajeScreen,
  Evaluacion: EvaluacionScreen,
},
{
    initialRouteName: "MainPage",
    headerMode: 'none',
});
//Navegador de la pantalla de registro
const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
  Registrar: RegistrarScreen,
},
  {
      initialRouteName: "Register",
      headerMode: 'none',
  }
);
//Navegador Principal
const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    RegisterS: RegisterStack,
    Login: LoginScreen,
    Principal: PrincipalStack,
  },
  {
      initialRouteName: "Home",
  }
);
const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;

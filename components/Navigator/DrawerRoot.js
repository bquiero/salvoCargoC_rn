
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
import {Icon } from 'react-native-vector-icons/Ionicons';
import HistorialViajesScreen from '../screen/MenuScreen/HistorialViajesScreen'
import FormasDePagoScreen from '../screen/MenuScreen/FormasDePagoScreen'
import CodigoPromocionalScreen from '../screen/MenuScreen/CodigoPromocionalScreen'
import ConfiguracionScreen from '../screen/MenuScreen/ConfiguracionScreen'
//Se coloca arriba una foto y nombre
const CustonDrawerComponent = (props) => (
  <SafeAreaView style = {{ flex: 1}}>
    <View style={{height:120, backgroundColor: 'white'}}>
      <Text> </Text>
      <Image source={require('../../assets/images/user.png')}
      style={{height:100, width:100, borderRadius:60}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
//Se crea un objeto del tipo DrawerNavigator
const DrawerRoot = createDrawerNavigator({
  //Se inicializa con los botones que tendrá el menu
  HistorialViajes: HistorialViajesScreen,
  FormasDePago: FormasDePagoScreen,
  CodigoPromocional:CodigoPromocionalScreen,
  Configuracion: ConfiguracionScreen,

},
{//Se agrega un componente al menu (en este caso foto)
  contentComponent: CustonDrawerComponent
},
{
    initialRouteName: "HistorialViajes",
    //Se añaden las opciones de navegación
//    navigationOptions: ({navigation}) => ({
//      title: "Menu",
//      headerLeft: <Text>sdf  </Text>
//    })
  }
);

//const AppContainer = createAppContainer(DrawerRoot);
export default DrawerRoot;

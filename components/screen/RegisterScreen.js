import React, { Component } from 'react';
//import { View } from "react-native";
import { View,Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Right, Body, Title, TextInput } from 'native-base';
import {Icon as NBIcon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform, StatusBar, StyleSheet} from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Font, AppLoading } from "expo";
import styles from '../Styles/MyStyles'

export default class RegisterScreen extends Component {
  //Constructor necesario para cargar las fuentes

  constructor(props) {
    super(props)
    this.state={
      name:'',nameValidate:true,  nameNull:true,
      apellido:'',  apellidoValidate:true,  apellidoNull:true,
      correo:'', correoValidate:true, correoNull:true,
      telefono:'', telefonoValidate:true, telefonoNull:true,
      password:'', passwordNull:true,
      repPassword:'', repPasswordValidate:true, repPasswordNull:true,
      msgBox:'',
      loading: true,
    }
  }
  //Para cargar las fuentes, en general no tocar
    async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }

//Validación de campos
  validate(text,type)
  //Establece los estados que indican si el ingreso de los campos es correcto
  {
    mail=/^[.@a-zA-Z0-9_\-]+$/
    alph=/^[a-zA-Z]+$/
    alphs=/^[\sa-zA-Z]+$/
    num=/^[0-9_]+$/
    //validación para el usuario
    if(type=='name')
    {
      if(alph.test(text) && text !=null)
      {
        this.setState({  nameValidate:true,  })
      }else{
        this.setState({   nameValidate:false,})
      }
      if (text=='') {
        this.setState({  nameNull:true,  })
      } else {
        this.setState({  nameNull:false,  })
      }
      this.setState({  name:text,  })
    }else if(type=='apellidos'){

      if(alphs.test(text) && text !=null)
      {
        this.setState({  apellidoValidate:true,  })
      }else{
        this.setState({   apellidoValidate:false,})
      }
      if (text=='') {
        this.setState({  apellidoNull:true,  })
      } else {
        this.setState({  apellidoNull:false,  })
      }
  }else if (type=='correo') {
    if(mail.test(text) && text !=null && text.includes('@')  && text.includes('.'))
    {
      this.setState({  correoValidate:true,  })
    }else{
      this.setState({   correoValidate:false,})
    }
    if (text=='') {
      this.setState({  correoNull:true,  })
    } else {
      this.setState({  correoNull:false,  })
    }
  }else if (type=='telefono') {
    if(num.test(text) && text !=null)
    {
      this.setState({  telefonoValidate:true,  })
    }else{
      this.setState({   telefonoValidate:false,})
    }
    if (text=='') {
      this.setState({  telefonoNull:true,  })
    } else {
      this.setState({  telefonoNull:false,  })
    }
  }else if (type=='pass') {

    if (text=='') {
      this.setState({  passwordNull:true,  })
    } else {
      this.setState({  passwordNull:false,  })
    }
    this.setState({  password:text,  })
  }else if (type=='repPass') {
    if(text===this.state.password)
    {
      this.setState({  repPasswordValidate:true,  })
    }else{
      this.setState({   repPasswordValidate:false,})
    }
    if (text=='') {
      this.setState({  repPasswordNull:true,  })
    } else {
      this.setState({  repPasswordNull:false,  })
    }
    this.setState({  repPassword:text,  })
  }
}
  //Validación de campos
    validateSend()
    {
      if (this.state.nameNull ||
         this.state.apellidoNull ||
          this.state.correoNull||
          this.state.telefonoNull ||
          this.state.passwordNull ||
          this.state.repPasswordNull)
       {
         alert('Existen campos obligatorios sin llenar')
         return false;
       } else if (!this.state.nameValidate) {
         alert('Asegurese de ingresar el nombre correctamente')
         return false;
       }else if (!this.state.apellidoValidate ) {
         alert('Asegurese de ingresar los apellidos correctamente')
         return false;
       }
       else if (!this.state.correoValidate ) {
         alert('Formato de correo Incorrecto\n ejemplo:\n j_perez@salvocargo.com');
         return false;
       }
       else if (!this.state.telefonoValidate ) {
         alert('El  número es incorrecto\n Solo se permiten números')
         return false;
       }
       else if (!this.state.repPasswordValidate) {
         alert('La contraseña no coincide\n ambas contraseñas deben ser iguales')
         return false;
       }else {
         return true;
       }

    }

  render() {
    if (this.state.loading) {
          return (
              <AppLoading />
          );
        }
    return (
      //Vista de la aplicación
      <Container style={styles.container}>
      <Header style={styles.header} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Registrarse</Title>
          </Body>
          <Right />
      </Header>

      <Content enableOnAndroid enableAutomaticScroll
    keyboardOpeningTime={0}
    extraHeight={Platform.select({ android: 250 })}>
        <Grid>
          <Row style={{  height: 20 }}>
          </Row>
          <Row>
            <Body>
              <Button large rounded light block iconRight  >
                <Text>Conectar con Facebook <Icon name='facebook' size={30}  color ='#3b5998' /></Text>
              </Button>
            </Body>
          </Row>
          <Row style={{ height: 20 }}>
          </Row>
          <Row>
            <Body>
              <Button large rounded light block iconRight  >
                <Text>Conectar con Twitter <Icon name='twitter' size={30}  color ='#00acee' /></Text>
              </Button>
            </Body>
          </Row>
          <Row style={{height: 60 }}>
            <Body>
              <Text>o</Text>
              <Text>Cree una nueva cuenta en SalvoCargo</Text>
              <Text>{this.value}</Text>
            </Body>
          </Row>
        </Grid>
        <Form>
          <Item floatingLabel
          success={this.state.nameValidate ? true : false}
          error={this.state.nameValidate ? false : true}>
            <Label>Nombre*</Label>
                <Input  onChangeText={(text)=> this.validate(text,'name')}/>
          </Item>
          <Item floatingLabel
          success={this.state.apellidoValidate ? true : false}
          error={this.state.apellidoValidate ? false : true}>
            <Label>Apellidos*</Label>
            <Input  onChangeText={(text)=> this.validate(text,'apellidos')}/>
          </Item>
          <Item floatingLabel
          success={this.state.correoValidate ? true : false}
          error={this.state.correoValidate ? false : true}>
            <Label>Correo electronico*</Label>
            <Input autoCapitalize= 'none'
             keyboardType='email-address'
              onChangeText={(text)=> this.validate(text,'correo')}/>
          </Item>
          <Item floatingLabel
          success={this.state.telefonoValidate ? true : false}
          error={this.state.telefonoValidate ? false : true}>
            <Label>Telefono*</Label>
              <Input keyboardType='phone-pad'
               onChangeText={(text)=> this.validate(text,'telefono')}/>
          </Item>
          <Item floatingLabel
          success={this.state.passwordNull? false : true}
          error={this.state.passwordNull ? true : false}>
            <Label>Contraseña*</Label>
            <Input autoCapitalize= 'none'
             secureTextEntry={true}
              onChangeText={(text)=> this.validate(text,'pass')}/>
          </Item>
          <Item floatingLabel last
          success={this.state.repPasswordValidate ? true : false}
          error={this.state.repPasswordValidate ? false : true}>
            <Label>Repetir Contraseña*</Label>
            <Input autoCapitalize= 'none'
            secureTextEntry={true}
             onChangeText={(text)=> this.validate(text,'repPass')}/>
          </Item>
        </Form>
        <Text> </Text>
        <Button block onPress={() => this.validateSend() ?  this.props.navigation.navigate('Principal'):null}>
          <Text>Registrarse </Text>
        </Button>
        </Content>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Icon, Button, Body, Title,Text, Thumbnail, ListItem, CheckBox } from 'native-base';
import styles from '../Styles/MyStyles'
export default class LoginScreen extends Component {
//
  constructor(props) {
    super(props)
    this.state={
      name:'',
      nameValidate:true,
      nameNull:true,
      password:'',
      passwordNull:true,
      msgBox:'',
    }
  }
//Validación de campos
  validate(text,type)
  //Establece los estados que indican si el ingreso de los campos es correcto
  {
    alph=/^[.@a-zA-Z0-9_\-]+$/
    //validación para el usuario
    if(type=='username')
    {
      if(alph.test(text) && text !=null && text.includes('@')  && text.includes('.'))
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
    }else if (type=='password') {
      if (text=='') {
        this.setState({  passwordNull:true,  })
      } else {
        this.setState({  passwordNull:false,  })
      }
    }

  }
  //Validación de campos
    validateSend()
    {
      if (this.state.nameNull) {
        alert('Debe ingresar un Correo');
        return false;
      } else if (!this.state.nameValidate){
        alert('Formato de correo Incorrecto\n ejemplo: j_perez@salvocargo.com');
        return false;
      } else if(this.state.passwordNull){
        alert('Debe ingresar su contraseña');
        return false;
      } else {
        return true;
      }
    }
  render() {
    const uri = '../../assets/images/user.png';
    return (
      //Se seleciona el estilo del container
      <Container style={styles.container}>
      <Header style={styles.header} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Ingresar</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel
            success={this.state.nameValidate ? true : false}
            error={this.state.nameValidate ? false : true} >
              <Label>correo electrónico</Label>
              <Input  autoCapitalize= 'none'
               keyboardType='email-address'
               onChangeText={(text)=> this.validate(text,'username')} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(text)=> this.validate(text,'password')} />
            </Item>
          </Form>
          <Text> </Text>
          <Button block onPress={() => this.validateSend() ?  this.props.navigation.navigate('Principal'):null}>
            <Text>Ingresar </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

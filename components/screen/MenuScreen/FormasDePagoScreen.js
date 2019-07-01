import React, { Component } from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Icon, Button, Body, Title,Text, Thumbnail } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from '../../Styles/MyStyles'
export default class FormasDePagoScreen extends Component {
//
  render() {
    const uri = '../../assets/images/user.png';
    return (
      //Se seleciona el estilo del container
      <Container style={styles.container}>
      <Header style={styles.header} >
          <Left/>
          <Body>
            <Title>Formas de Pago</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.popToTop()}>
              <Icon name='arrow-back'/>
            </Button>
          </Right>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

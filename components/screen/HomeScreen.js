import React, { Component } from 'react';
import {View,Image,Dimensions } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font, AppLoading } from "expo";//Para cargar las fuentes de native-base
import styles from '../Styles/MyStyles'

export default class HomeScreen extends Component {
  //Constructor necesario para cargar las fuentes
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
//Para cargar las fuentes
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
          return (

              <AppLoading />

          );
        }
    return (
      <Container style={styles.container}>
        <Content>
        <Grid>
          <Row style={{flex: 1, backgroundColor: '#635DB7', height: 200 }}>
            <View style={{flex: 1, backgroundColor: 'white',height: null, resizeMode: 'stretch'}}>
              <Image source={require('../../assets/images/home.jpeg')}
              style={{flex: 1,height:null, width:null, resizeMode: 'cover'}} />
          </View>
          </Row>
          <Row style={{ height: 200 }}>
           <Text style={{fontSize: 35, width: "100%", textAlign: 'center', marginTop: 80}}>SalvoCargo</Text>
          </Row>
          <Button block light onPress={() => this.props.navigation.navigate('Login')} style={{ marginRight: 30, marginLeft: 30 }}>
            <Text>Ingresar</Text>
          </Button>
            <Text></Text>
          <Button block onPress={() => this.props.navigation.navigate('RegisterS')} style={{ marginRight: 30, marginLeft: 30 }}>
            <Text>Registrarse </Text>
          </Button>
        </Grid>
        </Content>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import {View,Image,Dimensions, WebView , TextInput } from "react-native";
import { Container, Header, Content, Form, Item, Input, Card,Picker, CardItem, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class EvaluacionScreen extends Component {
	constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        console.log();
    }
  render() {
        return (
        <Container style={styles.container}>
          <Content>
          <Text style={{height:20}}></Text>
          <Row style={styles.containerflex}>
            <Grid style={{width: '20%'}}>
              <Text style={{fontSize: 15, marginLeft: 70}}>Conductor: Brian Jojas</Text>
            </Grid>
            <Image source={require('../../assets/images/user.png')}
      style={{height:60, width:60, borderRadius:60, marginRight:70}} />
          </Row>
          <Text style={{fontSize: 20, marginTop:15,  width: "100%", textAlign: 'center'}}>Evalue el servicio de flete</Text>
          <Text style={{fontSize: 17,  marginLeft:20}}>Origen:</Text>
          <Text style={{fontSize: 15,  marginLeft:25}}>Av. Los Carrera 301, Concepción, Región del Bío Bío</Text>
          <Text style={{fontSize: 17,  marginTop:8, marginLeft:20}}>Destino:</Text>
          <Text style={{fontSize: 15,  marginLeft:25}}>Barros Arana 278, Concepción, Región del Bío Bío</Text>
          <Text></Text>
          <View style={styles.textAreaContainer} >
		    <TextInput
		      style={styles.textArea}
		      underlineColorAndroid="transparent"
		      placeholder="Su comentario"
		      placeholderTextColor="grey"
		      numberOfLines={7}
		      multiline={true}
		    />
		  </View>
		  <Row style={styles.containerflex2}>
                <Icon name="star" style={{height: 40, width: 40,fontSize: 40, marginTop:20}} onPress={ this.onClick } />
                <Icon name="star" style={{height: 40, width: 40,fontSize: 40, marginTop:20}} onPress={ this.onClick }/>
                <Icon name="star" style={{height: 40, width: 40,fontSize: 40, marginTop:20}} onPress={ this.onClick }/>
                <Icon name="star" style={{height: 40, width: 40,fontSize: 40, marginTop:20}} onPress={ this.onClick }/>
                <Icon name="star" style={{height: 40, width: 40,fontSize: 40, marginTop:20}} onPress={ this.onClick }/>
            </Row>
            <Body>
                <Button light onPress={() => this.props.navigation.navigate('MainPage')} style={{backgroundColor: '#02a7f0',marginTop: 50}}>
                  <Text style={{color:'#fff'}}>Enviar evaluación</Text>
                </Button>
              </Body>
              <Body>
                <Button style={{marginTop: 25}} light onPress={() => this.props.navigation.navigate('MainPage')} >
                  <Text>Valorar más tarde</Text>
                </Button>
              </Body>
          </Content>
        </Container>
    );
  }
}

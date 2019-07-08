import React, { Component } from 'react';
import {View,Image,Dimensions, WebView , TextInput } from "react-native";
import { Container, Header, Content, Form, Item, Input, Card,Picker, CardItem, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font, AppLoading } from "expo";//Para cargar las fuentes de native-base
import {Platform, StatusBar, StyleSheet} from 'react-native';

export default class EvaluacionScreen extends Component {
	constructor(props) {
        super(props)
				this.state = {
					loading: true,
					starState1: false,
					starState2: false,
					starState3: false,
					starState4: false,
					starState5: false,
				 };
        //this.onClick = this.onClick.bind(this)
    }
    onClick(star) {
			if (star==1 ) {
				if (!this.state.starState1) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:false,  })
					this.setState({  starState3:false,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}else if (this.state.starState1) {
					this.setState({  starState1:false,  })
					this.setState({  starState2:false,  })
					this.setState({  starState3:false,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}
			} else if (star==2 ){
				if (!this.state.starState2) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:false,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}else if (this.state.starState2) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:false,  })
					this.setState({  starState3:false,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}
			} else if (star==3 ){
				if (!this.state.starState3) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:true,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}else if (this.state.starState3) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:false,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}
			} else if (star==4 ){
				if (!this.state.starState4) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:true,  })
					this.setState({  starState4:true,  })
					this.setState({  starState5:false,  })
				}else if (this.state.starState4) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:true,  })
					this.setState({  starState4:false,  })
					this.setState({  starState5:false,  })
				}
			} else if (star==5 ){
				if (!this.state.starState5) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:true,  })
					this.setState({  starState4:true,  })
					this.setState({  starState5:true,  })
				}else if (this.state.starState5) {
					this.setState({  starState1:true,  })
					this.setState({  starState2:true,  })
					this.setState({  starState3:true,  })
					this.setState({  starState4:true,  })
					this.setState({  starState5:false,  })
				}
			}

    }
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
          <Content enableOnAndroid enableAutomaticScroll
					keyboardOpeningTime={0}
			    extraHeight={Platform.select({ android: 150 })}>
          <Text style={{height:20}}></Text>
          <Row style={styles.containerflex}>
            <Grid style={{width: '20%'}}>
              <Text style={{fontSize: 15, marginLeft: 70}}>Cliente: Brian Jojas</Text>
            </Grid>
            <Image source={require('../../assets/images/user.png')}
      style={{height:60, width:60, borderRadius:60, marginRight:70}} />
          </Row>
          <Text style={{fontSize: 20, marginTop:15,  width: "100%", textAlign: 'center'}}>Evalue al Cliente</Text>
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

								<Icon name="star" style={this.state.starState1 ? styles.iconSelected: styles.iconNSelected} onPress={() => this.onClick(1) }/>
                <Icon name="star" style={this.state.starState2 ? styles.iconSelected: styles.iconNSelected} onPress={() =>  this.onClick(2) }/>
                <Icon name="star" style={this.state.starState3 ? styles.iconSelected: styles.iconNSelected} onPress={() =>  this.onClick(3) }/>
                <Icon name="star" style={this.state.starState4 ? styles.iconSelected: styles.iconNSelected} onPress={() =>  this.onClick(4) }/>
                <Icon name="star" style={this.state.starState5 ? styles.iconSelected: styles.iconNSelected} onPress={() =>  this.onClick(5) }/>
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

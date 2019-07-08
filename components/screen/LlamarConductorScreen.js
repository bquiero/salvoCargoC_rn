import React, { Component } from 'react';
import {View,Image,Dimensions, WebView , TextInput } from "react-native";
import { Container, Header, Content, Form, Item, Input, Card,Picker, CardItem, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem, Icon as NBIcon } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LlamarConductorScreen extends Component {
  render() {
        return (
        <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('ContactarConductor')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Pedir Flete</Title>
          </Body>
          <Right/>
        </Header>
          <Content>
          <Text style={{height:20}}></Text>
          <Row style={styles.containerflex}>
            <Grid style={{width: '20%'}}>
              <Text style={{fontSize: 15, width:'100%',textAlign:'center'}}>Cliente: Brian Jojas</Text>
            </Grid>

          </Row>
          <Text style={{fontSize: 20, marginTop:15,  width: "100%", textAlign: 'center'}}>llamada...</Text>

          <Image source={require('../../assets/images/user.png')}
      style={{height:450, width:'100%',marginTop:40}} />
      		<Grid>
		        	<Row style={styles.containerflex3}>
				      <NBIcon name='volume-off' style={{width:60,height:60, fontSize:60}}/>
				      <NBIcon name='call' style={{color:'#cb2431',width:60,height:60, fontSize:60,marginTop:10, transform: [{ rotate: '135deg'}]}} onPress={() => this.props.navigation.navigate('ContactarConductor')}/>
				      <NBIcon name='mic-off' style={{width:60,height:60, fontSize:60}}/>
				    </Row>
			</Grid>
          </Content>
        </Container>
    );
  }

}

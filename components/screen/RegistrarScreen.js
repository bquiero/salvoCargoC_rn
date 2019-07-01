import React, { Component } from 'react';
import {View,Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Right, Body, Title} from 'native-base';
import styles from '../Styles/MyStyles'
import {Icon as NBIcon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RegistrarScreen extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Register')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Registrarse</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        	<Grid>
	        <Row style={{height: 60 }}>
	            <Body>
	              <Text>Ingresa el código que te enviaremos</Text>
	            </Body>
	          </Row>
	          <Row style={styles.containerInline}>
		          <Item floatingLabel style={{width:'20%', margin:'2.5%'}}>
		            <Label>N°</Label>
		            <Input keyboardType='numeric'  />
		          </Item>
		          <Item floatingLabel style={{width:'20%', margin:'2.5%'}}>
		            <Label>N°</Label>
		            <Input keyboardType='numeric'  />
		          </Item>
		          <Item floatingLabel style={{width:'20%', margin:'2.5%'}}>
		            <Label>N°</Label>
		            <View>
		            <Input keyboardType='numeric'  />
		            </View>
		          </Item>
		          <Item floatingLabel style={{width:'20%', margin:'2.5%'}}>
		            <Label>N°</Label>
		            <Input keyboardType='numeric' />
		          </Item>
	          </Row>
	        </Grid>
			
	        <Text> </Text>
	        <Button block onPress={() => this.props.navigation.navigate('Principal')}>
	          <Text>OK</Text>
	        </Button>
	        <Text> </Text>
	        <Text style={{color: 'blue', textDecorationLine: 'underline', width:'100%', textAlign:'center'}}>
			  Reenviar Código
			</Text>
        </Content>
      </Container>
    );
  }
}

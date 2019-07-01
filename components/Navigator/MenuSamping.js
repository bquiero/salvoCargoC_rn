import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Icon, Button, Body, Title,Text, Thumbnail, ListItem, List } from 'native-base';
import styles from '../Styles/MyStyles'
import { Drawer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class MenuSamping extends Component {
  constructor(props){
       super(props);
       this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
       this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
       this.counter= this.props.counter;
     }
  doParentToggleFromChild(){
   this.props.parentToggle(++this.counter)
    }
  render() {
    return (
      <Container style={styles.container}>
      <Header style={styles.header} >
          <Left />
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right>

          <Button transparent onPress={() => this.props.closeDrawer()}>
            <Icon name='arrow-back'/>
          </Button>
          </Right>
        </Header>
        <Content>
        <Grid>
          <Row style={{ height: 10 }}>
          </Row>
          <Row style={{ height: 100 }}>
          <Thumbnail large source={require('../../assets/images/user.png')}/>
            <Col>
              <Text>   </Text>
              <Text>    Braulio Quiero </Text>
              <Text>    bquiero@udec.cl</Text>
            </Col>
          </Row>

          <Col >
          <ListItem icon
          onPress={() => this.props.navigator('HistorialViajes')}>
              <Left>
                <Button style={{ backgroundColor: "#FF9501" }}
                onPress={() => this.props.navigator('HistorialViajes')}>
                  <Icon active name="clipboard" />
                </Button>
              </Left>
              <Body>
                <Text>Historial de Viajes</Text>
              </Body>
              <Right/>
          </ListItem>
          <ListItem icon
            onPress={() => this.props.navigator('FormasDePago')}>
              <Left>
                <Button style={{ backgroundColor: "#4d2800" }}
                  onPress={() => this.props.navigator('FormasDePago')}>
                  <Icon active name="wallet" />
                </Button>
              </Left>
              <Body>
                <Text>Formas de Pago</Text>
              </Body>
              <Right/>
          </ListItem>
          <ListItem icon
            onPress={() => this.props.navigator('CodigoPromocional')}>
              <Left>
                <Button style={{ backgroundColor: "#000000" }}
                  onPress={() => this.props.navigator('CodigoPromocional')}>
                  <Icon active name="barcode" />
                </Button>
              </Left>
              <Body>
                <Text>Codigo Promocional</Text>
              </Body>
              <Right/>
          </ListItem>
          <ListItem icon
            onPress={() => this.props.navigator('Configuracion')}>
              <Left>
                <Button style={{ backgroundColor: " #273746" }}
                  onPress={() => this.props.navigator('Configuracion')}>
                  <Icon active name="settings" />
                </Button>
              </Left>
              <Body>
                <Text>Configuracion</Text>
              </Body>
              <Right/>
          </ListItem>
          </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

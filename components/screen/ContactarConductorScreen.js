import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Icon, Text, Right, Item, Input, View, Left, Title, Button, Body, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import {Icon as NBIcon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class ContactarConductorScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('EsperarConductor')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Grid>
              <Col>
                <Row>
                  <Title>Brian Jojas</Title>
                </Row>
                <Row>
        //          <Text style={{fontSize: 15, marginLeft: 20}}>conductor</Text>
                </Row>
              </Col>
            </Grid>
          </Body>
//          <Right/>
        </Header>
        <Content>
          //Ingresa tu código aquí
        </Content>
      </Container>
    );
  }
}

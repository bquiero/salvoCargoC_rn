import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Textarea,Icon, Subtitle,Text, Right, Item, Input, View, Left, Title, Button, Body, List, ListItem, Form } from 'native-base';
import styles from '../Styles/MyStyles'
import {Icon as NBIcon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class ContactarConductorScreen extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      bodyText: "Hola!"
    };
    this.texto= React.createRef();
  }

  validate(text){
    if (text != null) {
      this.setState({ bodyText: text });
    }
  }

  ShowHideComponent = () => {
    console.log(this.texto);
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });

    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header2}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('EsperarConductor')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Brian Jojas</Title>
            <Subtitle>Cliente</Subtitle>

          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('LlamarConductor')}>
              <Icon name='call'/>
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row style={{backgroundColor: '#ffffff',height: 420}}>
              <Item rounded style={{height: 50, marginTop: 15, marginLeft: 10 }}>
                <Text>  Hola soy el cliente  </Text>
              </Item>
              {this.state.show ? (
              <Right>
                <Item rounded style={{height: 50, backgroundColor: '#77dd77'}}>
                  <Text>{this.state.bodyText}</Text>
                </Item>
              </Right>
              ) : null}
            </Row>
            <Row style={{backgroundColor: '#9c9c9c', height: 100, gravity: 'bottom'}}>
              <Form style={{ width: '80%', marginLeft: 10}}>
                <Item regular>
                  <Input placeholder='Escribe...' onChangeText={(text)=> this.validate(text)} />
                </Item>
              </Form>
              <Right>
              <Button transparent onPress={this.ShowHideComponent} style={{marginBottom: 40}} >
                <Icon name='send'/>
              </Button>
              </Right>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

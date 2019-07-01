import React, { Component } from 'react';
import {View,Image,Dimensions, WebView } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class MainPageScreen extends Component {
  closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer() {
      this.drawer._root.open()
    };

  render() {

    return (
      <Drawer
        ref = {(ref)=>{ this.drawer =ref;}}
        content = {<SideBar navigator={this.props.navigation.navigate} closeDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()}>

        <Container style={styles.container}>
          <Content>

            <WebView
              source={{uri: 'https://www.google.com/maps/d/embed?mid=1qrcRzQicAWR0iNhqoYoqwzLV3Xg'}}
              style={{ height: 450 }}

              source={{uri: 'https://www.google.com/maps/d/embed?mid=1qrcRzQicAWR0iNhqoYoqwzLV3Xg&z=15'}}
              style={{ height: 300, marginTop: -50, marginLeft: -350 }}/>
            <View style={{position:'absolute',right:0,marginTop:0,marginRight:0,zIndex:1,height:50,width:50}}>
              <Button  style={styles.BtnMenuMap}  onPress={() => this.openDrawer()}>
                <Icon  name='menu'/>
              </Button>
            </View>
            <Grid>
            <Row style={{  height: 20 }}>
            </Row>
  
              <Body>
                <Button light onPress={() => this.props.navigation.navigate('PedirFlete')} >
                  <Text>Donde llevas tu Carga?</Text>
                </Button>
              </Body>

            <Col >
              <List>
              <ListItem icon
              onPress={() => this.props.navigation.navigate('PedirFlete')} >
                    <Left>
                      <Button style={{ backgroundColor: "#2c3e50" }}
                    onPress={() => this.props.navigation.navigate('PedirFlete')} >
                        <Icon active name="map" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Casa</Text>
                    </Body>
                    <Right>
                      <Icon style={{ color: "#2c3e50" }} active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon
                onPress={() => this.props.navigation.navigate('PedirFlete')} >
                    <Left>
                      <Button style={{ backgroundColor: "#2c3e50" }}
                      onPress={() => this.props.navigation.navigate('PedirFlete')} >
                        <Icon active name="map" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Trabajo</Text>
                    </Body>
                    <Right>
                      <Icon style={{ color: "#2c3e50" }} active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon
                onPress={() => this.props.navigation.navigate('PedirFlete')} >
                    <Left>
                      <Button style={{ backgroundColor: "#2c3e50" }}
                        onPress={() => this.props.navigation.navigate('PedirFlete')} >
                        <Icon active name="map" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Universidad</Text>
                    </Body>
                    <Right>
                      <Icon style={{ color: "#2c3e50" }} active name="arrow-forward" />
                    </Right>
                </ListItem>
                </List>
              </Col>
            </Grid>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

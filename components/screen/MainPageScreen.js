import React, { Component } from 'react';
import {View,Image,Dimensions, WebView } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import  {Icon as NBIcon} from 'native-base'
import  Icon from 'react-native-vector-icons/MaterialIcons';
////
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
    reload(){
        this.myWebView.reload()
      }
    state = {
        key: 1
    };
    resetWebViewToInitialUrl(){
    this.setState({
      key: this.state.key + 1
    });
  };
  componentDidMount(){
  // Toggle the state every second
      setTimeout(() => (
        this.props.navigation.navigate('InformacionFlete')
      ), 10000);
   }
  render() {

    return (
      <Drawer
        ref = {(ref)=>{ this.drawer =ref;}}
        content = {<SideBar navigator={this.props.navigation.navigate} closeDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()}>

        <Container style={styles.container}>

          <View style={{position:'absolute',right:0, top:200,marginTop:0,marginRight:0,zIndex:1,height:50,width:50}}>
            <Button  transparent style={{flex: 1,height:null, width:null, resizeMode: 'cover'}}
              onPress={()=>this.resetWebViewToInitialUrl()} title="reload" >
            <Image source={require('../../assets/images/location.png')}
            style={{height:40, width:40, backgroundColor:'transparent'}} />
            </Button>
          </View>
          <View style={{position:'absolute',left:0,marginTop:0,marginRight:0,zIndex:1,height:50,width:50}}>
            <Button  style={styles.BtnMenuMap}  onPress={() => this.openDrawer()}>
              <NBIcon  name='menu'/>
            </Button>
          </View>
            <WebView
              key={ this.state.key }
              source={{uri: 'https://www.google.com/maps/d/embed?mid=1CQ37qspvVEH11eThcxWJmb6hWnY0pmyM&z=14'}}
              style={{ height: 600, marginTop: -60, marginLeft: -50 }}
              ref={(ref) => this.myWebView = ref }/>

            <Content>
            <Grid>
            <Row style={{  height: 20 }}>
            </Row>
              <Text> </Text>
              <Text> Esperando clientes... </Text>
            </Grid>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

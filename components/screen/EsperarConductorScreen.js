import React, { Component } from 'react';
import {View,Image,Dimensions, WebView } from "react-native";
import { Container, Header, Content, Form, Item, Input, Card,Picker, CardItem, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class EsperarConductorScreen extends Component {
	closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer() {
      this.drawer._root.open()
    };
    //state object
    state = { isShowingText: true, key: 1 };

    resetWebViewToInitialUrl(){
    this.setState({
      key: this.state.key + 1
    });
  };
  render() {
        return (
      <Drawer
        ref = {(ref)=>{ this.drawer =ref;}}
        content = {<SideBar navigator={this.props.navigation.navigate} closeDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()}>

        <Container style={styles.container}>
				<View style={{position:'absolute',left:0,marginTop:0,marginRight:0,zIndex:1,height:50,width:50}}>
					<Button  style={styles.BtnMenuMap}  onPress={() => this.openDrawer()}>
						<Icon  name='menu'/>
					</Button>
				</View>
				<WebView
					key={ this.state.key }
					source={{uri: 'https://www.google.com/maps/d/embed?mid=1LpQGIZ0gWtacSESTCno2yRODf4I4wVNo&z=14'}}
					style={{ height: 500, marginTop: -60, marginLeft: -50 }}
				/>
				<View style={{position:'absolute',right:0, top:215,marginTop:0,marginRight:0,zIndex:1,height:50,width:50}}>
					<Button  transparent style={{flex: 1,height:null, width:null, resizeMode: 'cover'}}
						onPress={()=>this.resetWebViewToInitialUrl()} title="reload" >
					<Image source={require('../../assets/images/location.png')}
					style={{height:40, width:40, backgroundColor:'transparent'}} />
					</Button>
				</View>
          <Content>
            <Grid>
            <Row style={{  height: 20 }}>
            </Row>


          <Row style={styles.containerflex}>
            <Grid style={{width: '20%'}}>
              <Text style={{fontSize: 15, marginLeft: 70}}>Cliente: Brian Jojas</Text>
              <Row style={styles.containerflex}>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, marginLeft: 70, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20}}/>
              </Row>
            </Grid>
            <Image source={require('../../assets/images/user.png')}
      style={{height:40, width:40, borderRadius:60, marginRight:70}} />
          </Row>
          <Text></Text>
          <Text></Text>
          <Row >
            <Text style={{fontSize: 15, width: "100%", textAlign: 'center'}}>Llegada: 14:32</Text>
          </Row>
            </Grid>
            <Body>
                <Button style={{marginTop: 10, backgroundColor: '#02a7f0'}} light onPress={() => this.props.navigation.navigate('ContactarConductor')} >
                  <Text>Contactar Cliente</Text>
                </Button>
            </Body>
						<Text> </Text>
						<Body>
						<Button style={{marginTop: 10}} light onPress={() => this.props.navigation.navigate('Evaluacion')} >
							<Text>Finalizar Viaje</Text>
						</Button>
						</Body>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

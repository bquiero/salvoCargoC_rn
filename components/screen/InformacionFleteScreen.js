import React, { Component } from 'react';
import {View,Image,Dimensions, WebView } from "react-native";
import { Container, Header, Content, Form, Item, Input, Card,Picker, CardItem, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem } from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class InformacionFleteScreen extends Component {
  closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer() {
      this.drawer._root.open()
    };
	constructor(props) {
	    super(props);
	    this.state = {
	      selected: "key1",
         key: 1 ,
	    };
    }
    onValueChange(value: string) {
	    this.setState({
	      selected: value
	    });
	  }
    //state object

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
          source={{uri: 'https://www.google.com/maps/d/embed?mid=1i0dWYZjIfyEGt1s0JrMWynfuYKkHOthW&z=15'}}
          style={{ height: 400, marginTop: -50, marginLeft: -350 }}
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
	        <Row style={styles.containerflex2}>
	        	<Icon name="car" style={{height: 50, width: 50,fontSize: 50}}/>
	        	<Text style={{fontSize: 30}}>   $30.000 </Text>
	        </Row>
	        <Row style={styles.containerflex2}>
	        	<Text>L: 4039; Al: 1515; An: 1735.</Text>
            </Row><Row >
	        	<Form style={{fontSize: 20}}>
		            <Picker
		              note
		              mode="dropdown"
		              style={{ width: 170, color: '#000', marginLeft: 10, fontSize: 20}}
		              textStyle={{ fontSize: 20, color: '#000'}}
		              selectedValue={this.state.selected}
		              onValueChange={this.onValueChange.bind(this)}
		            >
		              <Picker.Item label="Effectivos" value="key0" style={{fontSize: 20}}/>
		              <Picker.Item label="Tarjeta credito" value="key1" style={{fontSize: 20}}/>
		              <Picker.Item label="Tarjeta debito" value="key2" style={{fontSize: 20}}/>
		              <Picker.Item label="PayPal" value="key3" style={{fontSize: 20}}/>
		            </Picker>
		          </Form>
	        </Row>
            <Row >
	        	<Text style={{fontSize: 15, marginLeft: 20}}>Llegado: 14:32</Text>
	        </Row>
	        <Row style={styles.containerflex}>
	        	<Grid style={{width: '20%'}}>
		        	<Text style={{fontSize: 15, marginLeft: 20}}>Conductor: Brian Jojas</Text>
		        	<Row style={styles.containerflex}>
		        		<Icon name="star" style={{height: 20, width: 20,fontSize: 20, marginLeft: 20, color:'#ffff00'}}/>
		        		<Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
		        		<Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
		        		<Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
		        		<Icon name="star" style={{height: 20, width: 20,fontSize: 20}}/>
		        	</Row>
	        	</Grid>
	        	<Image source={require('../../assets/images/user.png')}
      style={{height:40, width:40, borderRadius:60, marginRight:130}} />
	        </Row>
	        <Text></Text>

            </Grid>
            <Body>
                <Button light onPress={() => this.props.navigation.navigate('EsperarConductor')} style={{backgroundColor: '#02a7f0'}} >
                  <Text  style={{color:'#fff'}}>Confirmar viaje</Text>
                </Button>
              </Body>
	        <Text></Text>
              <Body>
                <Button light onPress={() => this.props.navigation.navigate('MainPage')}>
                  <Text>Cancelar viaje</Text>
                </Button>
              </Body>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

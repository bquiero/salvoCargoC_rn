import React, { Component } from 'react';
import {View,Image,Dimensions, WebView } from "react-native";
import { Container, Header, Content, Form, Textarea, Item, Input, Label, Icon,Button, Left, Right, Body, Title, Drawer, Text, List, ListItem, Picker} from 'native-base';
import styles from '../Styles/MyStyles'
import SideBar from '../Navigator/MenuSamping'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ViajeScreen extends Component {




	closeDrawer = () => {
      	this.drawer._root.close()
    };

    openDrawer() {
      this.drawer._root.open()
    };

    componentDidMount(){
    // Toggle the state every second
        setTimeout(() => (
          this.props.navigation.navigate('Evaluacion')
        ), 15000);
     }

    //state object
    state = { isShowingText: true };
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
					source={{uri: 'https://www.google.com/maps/d/embed?mid=1AXMJVv_7Sny3XOQIgCcnHjAZRS5Y1UHT&z=17'}}
					style={{ height: 500 ,marginTop:-45}}
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
              <Text style={{fontSize: 15, marginLeft: 50}}>Conductor: Brian Jojas</Text>
              <Row style={styles.containerflex}>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, marginLeft: 65, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20, color:'#ffff00'}}/>
                <Icon name="star" style={{height: 20, width: 20,fontSize: 20}}/>
              </Row>
            </Grid>
            <Image source={require('../../assets/images/user.png')}
      style={{height:40, width:40, borderRadius:60, marginRight:65}} />
          </Row>
	        <Row style={styles.containerflex2}>
	        	<Icon name="car" style={{height: 50, width: 50,fontSize: 50, marginTop:20}}/>
	        	<Text style={{fontSize: 30, marginTop:20}}>   $30.000 </Text>
	        </Row>
	        <Row style={styles.containerflex2}>
	        	<Text>L: 4039; Al: 1515; An: 1735.</Text>
            </Row><Row >

	        </Row>
          <Row ></Row>
          <Row style={{marginTop : 20}}>
            <Text style={{fontSize: 15, width: "100%", textAlign: 'center'}}>Llegada destino: 14:52</Text>
          </Row>
          <Row >
            <Text style={{fontSize: 15, width: "100%", textAlign: 'center'}}>Medio de Pago: Tarjeta Credito</Text>
          </Row>
	        <Text></Text>

            </Grid>


          </Content>
        </Container>
      </Drawer>
    );
  }
}

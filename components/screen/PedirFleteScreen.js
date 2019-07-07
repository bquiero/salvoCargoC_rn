import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Icon,Text, Right, Item, Input, View, Left, Title, Button, Body} from 'native-base';
import {Icon as NBIcon} from 'native-base';
import styles from '../Styles/MyStyles'




export default class PedirFleteScreen extends Component {

	constructor() {
    super();
    this.state = {
      show: false,
			destino: '',
				key: 1,

    };
  }

	ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

 	sendText(text){
			console.warn(['entre',this.state.destino,this.state.key]);
			setTimeout(() => (
	this.setState({	destino: text,key: this.state.key + 1})
			), 150);

	};

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('MainPage')}>
              <NBIcon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Pedir Flete</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
        	<View style={styles.MainContainer}>

        	<Item rounded>
            	<Icon active name='pin' />
            	<Input placeholder='Ubicación Actual'/>
          </Item>

          <Item rounded>
            	<Icon active name='search' />
            	<Input placeholder='destino'>{this.state.destino}</Input>
          </Item>

        	<Card>
        		<CardItem button ref={(ref) => this.myCardItem = ref }
						onPress={this.ShowHideComponent}>
        			<Icon  name= "map"/>
        			<Text>Casa</Text>
        		</CardItem>
        		<CardItem button onPress={this.ShowHideComponent}>
        			<Icon name= "map"/>
        			<Text>Trabajo</Text>
        		</CardItem>
        		<CardItem button onPress={this.ShowHideComponent}>
        			<Icon name= "map"/>
        			<Text>Universidad</Text>
        		</CardItem>
        	</Card>

        	{this.state.show ? (
        	<Card>
        		<CardItem header>
              		<Text>Peso Max (Kg)      LargoxAncho(m)     Precio</Text>
            	</CardItem>

        		<CardItem button onPress={() => this.props.navigation.navigate('InformacionFlete')}>
        			<Icon name= "car"/>
        			<Text>1500                       1.8x1                 $30.000</Text>
        		</CardItem>
        		<CardItem button onPress={() => this.props.navigation.navigate('InformacionFlete')}>
        			<Icon name= "car"/>
        			<Text>1500                       1.8x1                 $33.000</Text>
        		</CardItem>
        		<CardItem button onPress={() => this.props.navigation.navigate('InformacionFlete')}>
        			<Icon name= "bus"/>
        			<Text>3000                       1.8x1 ,5             $35.000</Text>
        		</CardItem>
        		<CardItem button onPress={() => this.props.navigation.navigate('InformacionFlete')}>
        			<Icon name= "bus"/>
        			<Text>4000                       2x1,9                 $50.000</Text>
        		</CardItem>
        	</Card>

        	) : null}

        	</View>

        </Content>

      </Container>
    );
  }



}

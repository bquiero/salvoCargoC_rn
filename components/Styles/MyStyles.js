import {Platform, StatusBar, StyleSheet} from 'react-native';
//Aqui estan los estilos
//Poner en todos los container para que la aplicación se ponga bajo la barra
//de estado de android.
const styles = StyleSheet.create({
  container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        }),
        backgroundColor:'#aaa'

    },
  header: {
    backgroundColor:'#2c3e50'
  },
  containerInline: {
       flexDirection: 'row', 
       alignSelf: 'center',
       justifyContent: 'space-around',
       flexWrap: 'wrap'
     },
  containerflex2: {
       flexDirection: 'row', 
       alignItems: 'center',
       justifyContent: 'center',
       flexWrap: 'wrap'
     },
     containerflex: {
       flexDirection: 'row', 
       alignItems: 'center',
       justifyContent: 'flex-start'
     },
  BtnMenuMap: {
    backgroundColor:'#2c3e50'
  }
  })
  export default styles;

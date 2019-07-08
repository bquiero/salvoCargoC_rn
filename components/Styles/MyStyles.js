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
  header2: {
    backgroundColor:'#287233'
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
  containerflex3: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around',
       width:'100%'
     },
     containerflex: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'flex-start'
     },
  BtnMenuMap: {
    backgroundColor:'#2c3e50'
  },
  iconSelected: {
    height: 40, width: 40,fontSize: 40, marginTop:20, color:'yellow',
  },
  iconNSelected: {
    height: 40, width: 40,fontSize: 40, marginTop:20, color:'#FFFFFF',
  },
  textAreaContainer: {
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  button: {

},
buttonPress: {
    backgroundColor: "#ffff00",
}
  })
  export default styles;

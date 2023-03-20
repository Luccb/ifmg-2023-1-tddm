import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Signin from './src/screens/Signin';
import Home from './src/screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
      asdasds

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    alignItems: 'top',
    justifyContent: 'center',
  },
  linha: {
    //flex: 1,
    flexDirection: 'row',
  },
  title:{
    fontSize: 20,
    color: '#fff',
  },
  botao1: {
    backgroundColor: '#0A0',
    
    //minWidth: 100,
    //maxWidth: 300,
    width: 80,
    //padding: '0 50 0 0',
    paddingVertical: '10',
    paddingHorizontal: '10',
    //margin: '1px 4px 8px 16px',
    marginHorizontal: '2',
    marginVertical: '4',

    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textTransform:  'uppercase',
    fontWeight: 'bold',

  }

});

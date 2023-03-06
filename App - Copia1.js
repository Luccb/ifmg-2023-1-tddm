import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>2222222</Text>
      <View style={styles.linha}>

        <TouchableOpacity style={styles.botao1}>
          <Text> B1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao1}>
          <Text> B2 </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>

        <TouchableOpacity style={styles.botao1}>
          <Text> B3 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao1}>
          <Text> B4 </Text>
        </TouchableOpacity>
      </View>

      <Text>texto abaixo</Text>
      <StatusBar style="auto" />
    </View>
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

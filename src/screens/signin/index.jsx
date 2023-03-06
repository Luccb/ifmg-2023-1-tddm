import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function Signin() {
  return (
    // <View style={styles.container}>
    <ImageBackground  style={styles.container}
      source={{
        // uri:  "./../../../assets/fundo.png"
        // uri:  "../../../assets/fundo.png"
        // uri:  "fundo.png"
        uri: 'https://reactjs.org/logo-og.png'
      }}
    >
        <Text style={styles.title}>asdasd login</Text>
        
        <View style={styles.form}>

          <Text style={styles.label}>Login</Text>
          <TextInput styles={styles.input} placeholderTextColor="#999"
            placeholder="digite seu LOGIN ou email"
            keyboardType='email-address'
          />
          <Text style={styles.label}>Pwd</Text>
          <TextInput styles={styles.input} placeholderTextColor="#999"
            placeholder="digite sua senha"
            textSecurityEntry={true}
          />
          <TouchableOpacity style={styles.button} 
            //</View>onPress={() => navigation.navigate('Auth')}
            >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            //</View>onPress={() => navigation.navigate('Auth')}
            >
            <Text style={[styles.label, styles.obs]}>Esqueci minha senha</Text>
          </TouchableOpacity>

          
        </View>
    </ImageBackground>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:    {
    color: 'white',
    fontSize: 20,
  },
  form:{
    width: '70%',

  },
  label:    {
    color: 'white',
    fontSize: 15,
  },
  obs: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width: 300,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    //border: '1px solid black',
  }

});

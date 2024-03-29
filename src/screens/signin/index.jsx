import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';

export default function Signin() {
  
  const [step,setStep] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  function handleSubmit() {

  }
w
  function changeForm() {

  }

  return (
    <View style={styles.container} >
        <Text style={styles.title}>TELA LOGIN</Text>
        
        <View style={styles.form}>

          <Text style={styles.label}>Login</Text>
          
          <TextInput styles={styles.input} 
            // placeholderTextColor="#999"
            // placeholder="digite seu LOGIN ou email"
            // keyboardType='email-address'
             value={email} // ---------- VER__ERRO
            // onChangeText={setEmail}
          />



          <Text style={styles.label}>Pwd</Text>
          
          <TextInput styles={styles.input} placeholderTextColor="#999"
            placeholder="digite sua senha"
            textSecurityEntry={true}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.label}>Esqueci minha senha</Text>
          </TouchableOpacity>
          
        </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  },
  button: {

  },
  buttonText: {

  },

});

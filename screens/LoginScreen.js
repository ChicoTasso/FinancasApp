import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect, useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';


export default function LoginScreen(navigation) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    const checkLoginStatus = async() =>{
        const loggedIn = await AsyncStorage.getItem('loggedIn');
        if (loggedIn === 'true'){
            navigation.replace('Home')
        }
    }
    checkLoginStatus();
  },[])
  
  const handleLogin = async () => {
    if (username === 'admin' && password ==='1234'){
        await AsyncStorage.setItem('loggedIn','true');
        navigation.replace('Home'); //Navega para tela principal
    }else{
        Alert.alert('Erro', 'Usuário ou senha inválidos!')
    }
  }


    return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Usuário' value={username} onChangeText={setUsername}/>
      <TextInput style={styles.input} placeholder='Senha' value={password} onChangeText={setPassword}/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
  title: {
    fontSize: 24,
    marginBottom:20,
    textAlign: 'center',
},
  input:{
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ccc',
    width : '75%',
},
   button : {
    marginTop: 22,
    backgroundColor: '#0984e3',
    width: '75%',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
   },
   text :{
    color: 'white'
   }
})
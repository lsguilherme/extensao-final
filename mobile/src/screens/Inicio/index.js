import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

import { styles } from './styles';

import axios from 'axios';

export function Inicio({ navigation }) {

  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();
 
  async function login() {
    await axios.post('http://10.0.0.100:8080/usuario/auth',{
        email: getEmail,
        senha: getSenha 
    })
    .then((response) => {
        setEmail('')
        setSenha('')
        response.data ? navigation.navigate('ListaProduto') : alert('Usuário incorreto!')
    })
    .catch(error => console.log(error))
    }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={30}
    >
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={[styles.imagem, {alignItems:'center'}]}>
            <Avatar
                rounded
                source={{
                    uri: "https://static.wikia.nocookie.net/naruto/images/9/9e/RockLee.png/revision/latest/scale-to-width-down/640?cb=20140728162107&path-prefix=pt-br",
                }}
                size='xlarge'
            />
            <Text style={styles.subtitle}>Bem vindo!!</Text>
        </View>
        

        <View style={styles.formStyle}>
            <Input 
                label="Email" 
                placeholder="Email"
                containerStyle={styles.inputContainerStyle}
                onChangeText={text => setEmail(text)}
                value={getEmail}
            />
            <Input
                secureTextEntry={true}
                label="Senha"
                placeholder="Senha" 
                containerStyle={styles.inputContainerStyle}
                onChangeText={text => setSenha(text)}
                value={getSenha}
            />
            
        </View>
        
        <View >
            <Button 
                title="Entrar"
                buttonStyle={styles.button}

                onPress={()=>login()}
            />
            <Button 
                title="Cadastrar-se"
                onPress={()=>navigation.navigate('CadastroUsuario')}
                buttonStyle={[styles.button,{backgroundColor:'red'}]}
            />
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}
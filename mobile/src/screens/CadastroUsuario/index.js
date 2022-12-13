import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';

import { styles } from './styles';

import axios from 'axios';
import FlashMessage, {showMessage} from 'react-native-flash-message';

export function CadastroUsuario({ route, navigation }) {

  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  useEffect(() => {
    if(route.params) {
      const { nome } = route.params;
      const { email } = route.params;
      const { senha } = route.params;
      
      setNome(nome);
      setEmail(email);
      setSenha(senha);
    }
  }, [])

  async function cadastrar() {
    await axios.post('http://10.0.0.100:8080/usuario',{
      nome: getNome,
      email: getEmail,
      senha: getSenha 
    })
    .then(() => {
      setNome('')
      setEmail('')
      setSenha('')
      showMessage({
        message: "Registro cadastrado com sucesso!",
        type: "success",
      });
    })
    .catch(error => console.log(error))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View 
        style={styles.container}>
          <Header
            centerComponent={{ text: "Cadastro de Usuário", style: styles.title}}
            leftComponent={
              <Button
              buttonStyle={styles.icon}
              icon={
                <Icon
                  name='angle-left'
                  type='font-awesome'
                  color='#fff'
                  size={32}
                />
                }
                onPress={()=>navigation.goBack()}
              />
            }
            />
            <FlashMessage position='top' hideStatusBar={true}/>
          
          <View style={styles.inputContainer}> 
          
            <Input
              label='Nome'
              placeholder='Nome'
              containerStyle={styles.input}
              onChangeText={text=>setNome(text)}
              value={getNome}
            />

            <Input
              label='Email'
              placeholder='Email'
              containerStyle={styles.input}
              onChangeText={text=>setEmail(text)}
              value={getEmail}
            />
            
            <Input
              secureTextEntry={true}
              label='Senha'
              placeholder='Senha'
              containerStyle={styles.input}
              onChangeText={text=>setSenha(text)}
              value={getSenha}
            />
          </View>

        <View style={styles.buttonContainer}>
          <Button 
            title='Salvar' 
            buttonStyle={styles.button} 
            onPress={()=>cadastrar()}
        />
        
        </View>
        </View>
          
        </ScrollView>
    </KeyboardAvoidingView>
  );
}
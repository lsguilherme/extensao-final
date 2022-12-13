import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Button, Header, Icon, Input } from 'react-native-elements';

import { styles } from './styles';

export function CadastroUsuario({ route, navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        <View 
        style={styles.container}>
          <Header
            centerComponent={{ text: "Usuário", style: styles.title}}
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
          
          <View style={styles.inputContainer}> 
          
            <Input
              label='Email'
              placeholder='Email'
              containerStyle={styles.input}
              
            />
            
            <Input
              secureTextEntry={true}
              label='Senha'
              placeholder='Senha'
              containerStyle={styles.input}
            
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
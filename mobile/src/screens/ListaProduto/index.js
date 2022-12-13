import React, { useEffect, useState } from 'react';
import { FlatList, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Header, Icon, ListItem, Text } from 'react-native-elements';

import { styles } from "./styles";

import axios from 'axios';
export function ListaProduto({ navigation }) {

  const [getData, setData] = useState([]);

  useEffect(()=>{

    async function resgatarDados(){
      const result = await axios('http://10.0.0.100:8080/produtos')
      setData(result.data)
    }
    resgatarDados()
  })
 




  const getUserData = ({ item: user }) => (

    <TouchableOpacity
    onPress={()=>navigation.navigate('Produto',{
      nome: user.nome,
      capacidade: user.capacidade,
      preco: user.preco,
      imagem: user.imagem,
      id: user.id,
      alterar: true
    })}
    >
        <Card>
          <Card.Image source={{ uri: user.imagem}}/>
          <Card.Divider/>
            <Text style={styles.textCardSize}><Text style={styles.textCardBold}>Produto: </Text> {user.nome}</Text>
            <Text style={styles.textCardSize}><Text style={styles.textCardBold}>Armazenamento: </Text> {user.capacidade}</Text>
            <Text style={styles.textCardSize}><Text style={styles.textCardBold}>Valor: </Text> {user.preco}</Text>
         </Card>
      </TouchableOpacity>
    
  );
  
  return (
    <View>

      <Header
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24 } }}
        rightComponent={
          <Button
            buttonStyle={styles.icon}
            icon={
              <Icon
                name="add"
                size={32}
                color="white"
                
              />}
            onPress={() => navigation.navigate('Produto')}
          />
        }
      />

      <FlatList
        keyExtractor = {user => user.id.toString()}
        data={getData}
        renderItem={getUserData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

    </View>
  );
}
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Icon, Input,  } from 'react-native-elements';

import { styles } from './styles';

import axios from 'axios';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export function Produto({ route, navigation }) {

  const [getId, setId] = useState();
  const [getCapacidade, setCapacidade] = useState();
  const [getNome, setNome] = useState();
  const [getPreco, setPreco] = useState();
  const [getImagem, setImagem] = useState();
  const [getAlterar, setAlterar] = useState();

  useEffect(() => {
    if (route.params) {
        const { id } = route.params;
        const { capacidade } = route.params;
        const { nome } = route.params;
        const { preco } = route.params;
        const { imagem } = route.params;
        const { alterar } = route.params;
    
        setId(id);
        setCapacidade(capacidade);
        setNome(nome);
        setPreco(preco);
        setImagem(imagem);
        setAlterar(alterar);
    }
  }, [])


  async function inserirDados() {
    const inserirProdutoUrl = 'http://10.0.0.100:8080/produtos';

    await axios.post(inserirProdutoUrl, {
        nome: getNome,
        capacidade: getCapacidade,
        preco: getPreco,
        imagem: getImagem
    })
    .then(() => {
        setNome('');
        setCapacidade('');
        setPreco('');
        setImagem('');
        showMessage({
          message: "Alterado com sucesso!",
          type: "sucess",
        })
    })
    .catch(()=>showMessage({
      message: "Aconteceu algum erro!",
      type: "info",
    }))
  }

  async function alterarDados() {
    const alterarProdutoUrl = 'http://10.0.0.100:8080/produtos/' + getId;

    await axios.put(alterarProdutoUrl, {
        nome: getNome,
        capacidade: getCapacidade,
        preco: getPreco,
        imagem: getImagem
    }).then(() => showMessage({
      message: "Alterado com sucesso!",
      type: "sucess",
    }))
    .catch(()=>showMessage({
      message: "Aconteceu algum erro!",
      type: "info",
    }))
  }

  async function excluirDados() {
    const deletarProduto = 'http://10.0.0.100:8080/produtos/' + getId

    await axios.delete(deletarProduto)
    .then(function(){
        setNome('');
        setCapacidade('');
        setPreco('');
        setImagem('');
        showMessage({
          message: "Excluido com sucesso!",
          type: "danger",
        });
    })
    .catch(()=>showMessage({
      message: "Aconteceu algum erro!",
      type: "info",
    }))
  }


  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
    <View style={styles.container}>
    <FlashMessage position='center' hideStatusBar={true}/>
      <Header
        centerComponent={{
          text: "Produto",
          style: { color: "#fff", fontSize: 24 },
        }}
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
        

      <View style={{ marginTop: 50 }}>
        <Input
          label="Nome"
          placeholder="Nome"
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setNome(text)}
          value={getNome}
        />

        <Input
          label="Capacidade"
          placeholder="Capacidade"
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setCapacidade(text)}
          value={getCapacidade}
        />

        <Input
          label="Preço (R$)"
          placeholder="Preço"
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setPreco(text)}
          value={getPreco}
        />

        <Input
          label="Imagem (URL)"
          placeholder="Imagem"
          containerStyle={styles.inputContainerStyle}
          onChangeText={text => setImagem(text)}
          value={getImagem}
        />
      </View>
      {!getAlterar ? (
        <Button
          title="Salvar"
          buttonStyle={{ width: 290 }}
          onPress={() => inserirDados()}
        />
      ) : (
        <Button
          title="Alterar"
          buttonStyle={{ width: 290, marginTop:10 }}
          onPress={() => alterarDados()}
        />
      )}

      { getAlterar ? (
        <Button
        title="Excluir"
        buttonStyle={{ width: 290, marginTop: 10, backgroundColor: 'red' }}
        onPress={() => excluirDados()}
      />
      ) : (
        null
      )}
    </View>
  </ScrollView>
  );
}
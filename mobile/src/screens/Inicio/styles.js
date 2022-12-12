import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  },
  imagem: {
    marginTop: 100,
  },
  subtitle: {
    fontSize:24, 
    fontWeight:'400',
    marginTop: 20
  },
  formStyle: {
    marginTop: 30,
  },
  inputContainerStyle: {
    width:300,
    marginRight: 2,
  },
  button: {
    width: 280,
    marginLeft: 10,
    marginTop: 10
  }
});
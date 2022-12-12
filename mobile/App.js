import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>

      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Routes/>
      
    </NavigationContainer>
  );
}



import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';



import Routes from './src/routes'
import { View } from 'react-native-animatable';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#006690" 
      barStyle="lihgt-content"/>
      <Routes />
    </NavigationContainer>
  );
}


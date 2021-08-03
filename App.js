import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './components/StackNavigation';
import Tabnavigation from './components/Tabnavigation';

export default function App() {
  return (

    <NavigationContainer>
    {/* <StackNavigation /> */}
    <Tabnavigation/>
  </NavigationContainer>

  );
}
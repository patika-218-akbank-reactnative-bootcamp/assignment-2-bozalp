/**
 * Whatsapp Clone
 * github.com/bozalp
 */

import React from 'react';
import { View, Text } from 'react-native';
import Whatsapp from './src/WhatsappClone/Whatsapp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WhatsApp" component={Whatsapp} 
        options={{
          headerStyle:{backgroundColor:'#128C7E'},
          headerTitleStyle:{color:'white'}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

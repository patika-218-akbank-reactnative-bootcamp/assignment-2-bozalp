/**
 * Whatsapp Clone
 * github.com/bozalp
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Whatsapp from './src/WhatsappClone';
import MessageArea from './src/WhatsappClone/MessageArea';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
      <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name="WhatsApp" component={Whatsapp}
          options={{
            headerStyle: { backgroundColor: '#128C7E', },
            headerTitleStyle: { color: 'white' }
          }} />
        <Stack.Screen name="MessageArea" component={MessageArea}
          options={{
            headerStyle: { backgroundColor: '#128C7E', },
            headerTitleStyle: { color: 'white' },
            headerRight: () => (
              <View style={styles.button_area}>
                < Icon name='video' size={20} solid color={'#fff'} />
                < Icon name='phone' size={20} solid color={'#fff'} />
                < Icon name='list' size={20} color={'#fff'} />
              </View>
            )
  }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create(
  {
    button_area:
    {
        width:120,
        flexDirection:'row',
        height:50,
        alignItems:'center',
        justifyContent:'space-between'
    }
  }
)

export default App;

import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TextArea = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 6, marginRight: 10 }}>
                <TextInput placeholder="Message" style={styles.textbox} />
            </View>
            <View style={{ flex: 1,}}>
            
                <TouchableOpacity style={styles.send_button}>
                <Icon name='paper-plane' size={24} solid color={'#128C7E'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            width:'100%',
            flexDirection: 'row',
            backgroundColor: 'white',
            backgroundColor: '#128C7E',
            position: 'absolute',
            bottom: 0,
            padding: 10
        },
        textbox:
        {
            width: '100%',
            height: 48,
            backgroundColor: 'white',
            borderRadius: 15,
        },
        send_button:
        {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: 'white',
            alignItems:'center',
            paddingTop:10
        },
    }
)

export default TextArea;

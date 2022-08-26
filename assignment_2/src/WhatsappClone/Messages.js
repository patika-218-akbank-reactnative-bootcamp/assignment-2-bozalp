import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
const Main = ({ navigation, receiver, messages }) => {

    function goToMessage() {
        //Alert.alert(receiver.firstName.toString());
        //navigation.navigate('MessageArea', receiver, messages);
        navigation.navigate('MessageArea', messages);
    }

    /*const selectedPerson = () => {
        user = 
    }*/

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <TouchableOpacity>
                <Image source={{ uri: receiver.profileImage }} style={styles.profile_image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.text_area} onPress={() => goToMessage()}>
                <Text style={styles.name_text}>
                    {receiver.firstName}
                </Text>
                <Text>
                    {messages.map(m => m.text)[0]}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            // flex:1,
            height: 84,
            flexDirection: 'row'
        },
        profile_image:
        {
            width: 64,
            height: 64,
            borderRadius: 32,
            margin: 10,
        },
        text_area:
        {
            width: '100%',
            padding: 12,
            paddingLeft: 3
            // backgroundColor:'red',
        },
        name_text:
        {
            fontWeight: '700',
            color: 'black',
            fontSize: 16
        }
    }
);

export default Main;

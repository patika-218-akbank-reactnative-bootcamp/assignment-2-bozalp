import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
const Main = ({ navigation, receiver, messages }) => {

    function goToMessage() {    //Gonderici ismi ve mesajlarini dizi seklinde diger sayfaya yolluyorum
        const mes = [messages, receiver.firstName];
        navigation.navigate('MessageArea', mes);
    }
    const [zoom, setZoom] = useState(false);

    /*  Resme tiklayince buyume olayini deniyorum...
     useEffect(() => {
          if (zoom) {
  
          }
      }, zoom);
  */
    function zoomImage() {
        setZoom(!zoom);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={zoomImage}>
                {/*
                    Resme tiklayince buyume olayini deniyorum...
                <View>{
                    zoom ?
                        <View style={styles.image_zoom_area}>
                            <Image source={{ uri: receiver.profileImage }} style={styles.zoomed_image} />
                        </View>
                        :
                        <Image source={{ uri: receiver.profileImage }} style={styles.profile_image} />
                } */}
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
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
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
        },
        image_zoom_area:
        {
            width: 250,
            height: 250,
            backgroundColor: '#dedede',
            position: 'absolute',
            justifyContent: 'center'
        },
        zoomed_image:
        {
            width: '50%',
            height: '50%',
        }
    }
);

export default Main;
